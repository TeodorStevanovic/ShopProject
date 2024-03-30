import React from 'react';
import { Link } from 'react-router-dom';

const SuccesfulPayment = () => {
  return (
    <div className='flex flex-col justify-center items-center  w-full h-96'>
      Thank you for shopinng!
      <Link to={'/'}>Keep browsing</Link>
    </div>
  );
};

export default SuccesfulPayment;
