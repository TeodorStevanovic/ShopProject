import React from 'react';
import { cartBag, userImg, logoImg } from '../assets/image';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const productData = useSelector((state) => state.shop.productData);
  const userInfo = useSelector((state) => state.shop.userInfo);

  return (
    <div className="w-full h-20 bg-black text-white border-b-[1px] border-b-gray-800 sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to="/">
          <div>
            <img className="w-20" src={logoImg} alt="logo" />
          </div>
        </Link>
        <div className="flex items-center  gap-8">
          <ul className="lg:flex lg:items-center sm: hidden gap-8">
            <li
              className="text-base text-white font-bold hover:text-gray-50
            hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 font-bodyFont"
            >
              <Link to={'/'}> Home</Link>{' '}
            </li>

            <li
              className="text-base text-white font-bold hover:text-gray-50 
            hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 transition-all font-bodyFont"
            >
              <Link to={'/shop'}>Shop</Link>{' '}
            </li>
            <li
              className="text-base text-white font-bold hover:text-gray-50
            hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 font-bodyFont"
            >
              <Link to={'/Contact'}> Contact</Link>
            </li>
          </ul>
          <Link to="/cart">
            <div className="relative">
              <img className="w-7" src={cartBag} alt="cart" />
              <span
                className="absolute w-16 h-0 top-0 left-0 text-sm flex items-center
            justify-center font-semibold"
              >
                {productData.length}
              </span>
            </div>
          </Link>
          <Link to="/log-in">
            <img className="w-7 h-7" src={userImg} alt="prfile" />
          </Link>
          {userInfo && <p>{userInfo.name}</p>}
        </div>
      </div>
    </div>
  );
};

export default Header;
