import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  deleteItem,
  incrementQuantity,
  resetCart,
} from "../redux/shopSlice";
import { Link } from "react-router-dom";

const Cartitems = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.shop.productData);
  return (
    <div className="w-2/3 pr-10">
      <div className="w-full">
        <h2 className="text-2xl">Shoping Cart</h2>
      </div>
      <div>
        {productData.map((item) => (
          <div
            key={item.id}
            className="lg:flex lg:flex-row lg:items-center lg:justify-between sm: flex sm: flex-col sm: items-center 
            gap-6 mt-6 "
          >
            <div className="flex items-center gap-2">
              <MdOutlineClose
                onClick={() => dispatch(deleteItem(item.id))}
                className="text-xl text-gray-600 hover:text-red-600 
              cursor-pointer duration-300"
              />
              <img
                className="lg:w-40 lg:h-40 sm: w-30 sm: h-30 object-scale-down"
                src={item.image}
                alt="productImg"
              />
            </div>
            <h2 className="lg:w-52 sm: w-30 sm: text-center">{item.title}</h2>
            <p className="lg:w-10 sm: w-30">${item.price}</p>
            <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
              <p className="text-sm">Quantity</p>
              <div className="flex items-center gap-4 text-sm font-semibold">
                <span
                  onClick={() =>
                    dispatch(
                      decrementQuantity({
                        id: item.id,
                        title: item.title,
                        image: item.image,
                        price: item.price,
                        quantity: 1,
                        description: item.description,
                      })
                    )
                  }
                  className="border h-5 font-normal text-lg flex items-center
                    justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer
                    duration-300 active:bg-black"
                >
                  -
                </span>
                {item.quantity}
                <span
                  onClick={() =>
                    dispatch(
                      incrementQuantity({
                        id: item.id,
                        title: item.title,
                        image: item.image,
                        price: item.price,
                        quantity: 1,
                        description: item.description,
                      })
                    )
                  }
                  className="border h-5 font-normal text-lg flex items-center
               justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer
               duration-300 active:bg-black"
                >
                  +
                </span>
              </div>
            </div>
            <p className="w-14">${item.quantity * item.price}</p>
          </div>
        ))}
      </div>
      <button
        onClick={() => dispatch(resetCart())}
        className="bg-red-500 text-white mt-8 ml-7 py-1 px-6 hover:bg-red-800 duration-300"
      >
        Remove All
      </button>
      <Link to="/">
        <button
          className="mt-8 ml-7 flex items-cneter gap-1 text-gray-400
        hover:text-black duration-300"
        >
          <span>
            <HiOutlineArrowLeft />
          </span>
          Go Shopping
        </button>
      </Link>
    </div>
  );
};

export default Cartitems;
