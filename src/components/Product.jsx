import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MdStars } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addtoCart } from "../redux/shopSlice";

const Product = () => {

  const dispatch = useDispatch();
  const [details, setDetails] = useState({});
  let [baseQty, setBaseQty] = useState(1);
  const location = useLocation();

  useEffect(() => {
    setDetails(location.state.item);
  }, []);

  return (
    <div>
      <div className="max-w-screen-xl mx-auto my-10 gap-10 lg:flex lg:flex-row sm: flex sm: flex-col sm: justify-center sm: items-center">
        <div>
          <img
            className="lg:w-full lg:h-[500px] sm: w-100 sm: h-100 object-cover"
            src={details.image}
            alt="productImg"
          />
        </div>
        <div className="w-3/5 lg:flex lg:flex-col lg:justify-center lg:items-start sm: flex sm: flex-col sm: justify-center sm: items-center gap-12 font-bodyFont">
          <div>
            <h2 className="text-4x1 font-semibold">{details.title}</h2>
            <div className="flex items-center gap-4 mt-3">
              <p className="text-2x1 font-medium text-gray-900">
                ${details.price}
              </p>
            </div>
          </div>
          <div className="gap-1 text-base flex items-center">
            <div className="flex">
              <MdStars />
              <MdStars />
              <MdStars />
              <MdStars />
              <MdStars />
            </div>
            <p className="text-xs text-gray-500">(Customers reviews)</p>
          </div>
          <p className="text-base text-gray-500 -mt-3">{details.description}</p>
          <div className="flex gap-4">
            <div
              className="w-52 flex items-center justify-between text-gray-500 gap-0
            border p-3"
            >
              <p className="text-sm">Quantity</p>
              <div className="flex items-center gap-4 text-sm font-semibold">
                <button
                  onClick={() =>
                    setBaseQty(baseQty === 1 ? (baseQty = 1) : baseQty - 1)
                  }
                  className="bordr h-5 font-normal text-lg flex items-center
                justify-center px-2 hover:bg-gray-600 hover:text-white cursor-pointer
                duration-300 active:bg-black"
                >
                  -
                </button>

                <span>{baseQty}</span>

                <button
                  onClick={() => setBaseQty(baseQty + 1)}
                  className="bordr h-5 font-normal text-lg flex items-center
                justify-center px-2 hover:bg-gray-600 hover:text-white cursor-pointer
                duration-300 active:bg-black"
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={() =>
                dispatch(
                  addtoCart({
                    id: details.id,
                    title: details.title,
                    image: details.image,
                    price: details.price,
                    quantity: baseQty,
                    description: details.description,
                  })
                )
              }
              className="bg-black text-white py-3 px-6 active:bg-gray-800"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
