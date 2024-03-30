import React from 'react';
import { Link } from 'react-router-dom';

const CheckoutModal = (props) => {
  return (
    <div className='w-screen h-screen flex justify-center items-center top-0 left-0 absolute bg-sky-500/100'>
      <div className='w-[400px] h-[400px] flex flex-col justify-center p-10'>
        Total Price: {props.price} + 10$ shipping = {Number(props.price) + 10}
        <label className='text-center'>Card Number</label>
        <input className='b-[1px]-black rounded-md mb-2' type="text" id="fname" name="fname" />
        <label className='text-center'>CVC</label>
        <input className='b-[1px]-black rounded-md mb-2' type="text" id="fname" name="fname" />
        <label className='text-center'>Expiration Date</label>
        <input className='b-[1px]-black rounded-md mb-2' type="date" id="fname" name="fname" />
        <label className='text-center'>Card Holder</label>
        <input className='b-[1px]-black rounded-md mb-2' type="text" id="fname" name="fname" />
        <Link to={'/successfulPayemnt'}>
        <div className='bg-black rounded-md text-white text-center'>
          <span>Pay</span>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default CheckoutModal;
