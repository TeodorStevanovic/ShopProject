import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Cartitems from '../components/Cartitems';
import CheckoutModal from '../components/CheckoutModal/CheckoutModal';

const Cart = () => {
  const productData = useSelector((state) => state.shop.productData);
  const userInfo = useSelector((state) => state.shop.userInfo);
  const [totalAmt, setTotalAmt] = useState('');
  const [payNow, setPayNow] = useState(false);

  useEffect(() => {
    let price = 0;
    productData.map((item) => { 
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price.toFixed(2));
  }, [productData]);

  const handleCheckout = () => {
    if (userInfo) { 
      setPayNow(!payNow); 
    }
  };
  return (
    <div
      className="max-w-screen-xl mx-auto py-20 
    lg:flex lg:flex-row sm: flex sm: flex-col sm: justify-center sm: items-center"
    >
      <Cartitems />
      <div
        className="lg:w-1/3 lg:py-6 lg:px-4 sm: w-1/2 sm: py-10 sm: px-10 sm: m-10 
      bg-[#575555] rounded-md"
      >
        <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
          <h2 className="text-2xl font-medium">Cart Totals</h2>
          <p className="flex items-center gap-4 text-base">
            Subtotal <span className="font-bold text-lg">${totalAmt}</span>
          </p>

          <p className="flex items-center gap-4 text-base">
            Shiping <span>$10</span>
          </p>
        </div>
        <p className="font-semibold flex justify-between mt-6">
          Total <span className="text-xl font-bold">${totalAmt}</span>
        </p>
        <button
          onClick={handleCheckout}
          className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300"
        >
          Checkout
        </button>
      </div>
      {payNow && <CheckoutModal price={totalAmt} setCheckoutModal={() => setPayNow(!payNow)} />}
    </div>
  );
};

export default Cart;
