import React, { useState } from 'react';
import { googleLog } from '../assets/image';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  EmailAuthProvider,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../redux/shopSlice';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const emailAuthPRovider = new EmailAuthProvider();

  const handleGoogleLogin = (e) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        dispatch(
          addUser({
            id: user.uid,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          })
        );
        setTimeout(() => {
          navigate('/');
        }, 1500);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleMailLogin = (e, email, password) => {
    // make sure you have email and password
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        dispatch(
          addUser({
            id: user.uid,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          })
        );
        setTimeout(() => {
          navigate('/');
        }, 1500);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-full flex flex-col items-center justify-center gap-10 py-20">
      <div className="w-full h-80 flex flex-col items-center justify-center gap-10">
        <div className='flex flex-col justify-center items-center'>
        <label>Email</label>
        <input className={'border-2'} type="email" onInput={(e) => setEmail(e.target.value)} />
        <label>Password</label>
        <input className={'border-2'} type="password" onInput={(e) => setPassword(e.target.value)} />
        <div
          onClick={() => handleMailLogin(email, password)}
          className="text-base w-60 h-12 tracking-wide border-gray-400
        rounded-md flex items-center justify-center gap-2 cursor-pointer duration-300 m-3"
        >
          <span className="bg-black text-white text-base py-3 px-8 tracking-wide
        rounded-md hover:bg-gray-800 duration-300">Sing in</span>
        </div>
        <button
          onClick={handleSignOut}
          className="bg-black text-white text-base py-3 px-8 tracking-wide
        rounded-md hover:bg-gray-800 duration-300 m-3"
        >
          Sign Out
        </button>

        <div
          onClick={handleGoogleLogin}
          className="text-base w-60 h-12 tracking-wide border-[2px] border-gray-400
        rounded-md flex items-center justify-center gap-2 cursor-pointer duration-300"
        >
          <img className="w-10" src={googleLog} alt="googleLog" />
          <span className="text-sm text-gray-900">Sing in with Google</span>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
