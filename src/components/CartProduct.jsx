import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addtoCart } from "../redux/shopSlice";

const CartProduct = ({ product }) => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const id = product.title;
  const stringId = (id) => {
    return String(id).toLowerCase().split(" ").join("");
  };
  const rootId = stringId(id);

  const handDetails = () => {
    navigation(`/product/${rootId}`, {
      state: {
        item: product,
      },
    });
  };
  return (
    <div
      className="group py-10
    lg:w-full lg:h-full sm: w-65 sm: h-65 "
    >
      <div
        onClick={handDetails}
        className="w-100 h-full rounded-t-xl border-[3px] cursor-pointer overflow-hidden"
      >
        <img
          className="w-100 h-100
          object-cover group-hover:scale-110 duration-500 "
          src={product.image}
          alt="imageProduct"
        />
      </div>

      <div className="w-full rounded-b-xl border-[2px] px-3 py-4 font-bodyFont">
        <div>
          <h2 className="font-base font-bold">
            {product.title.substring(0, 37)}
          </h2>
        </div>
        <div className="w-full">
          <p>{product.category}</p>
        </div>

        <div className="flex justify-around gap-2 relative overflow-hidden w-28 text-sm">
          <div className="flex gap-2 transform group-hover:translate-x-24 transition-transform duration-500 py-2">
            <p className="font-semibold">${product.price}</p>
          </div>

          <p
            onClick={() =>
              dispatch(
                addtoCart({
                  id: product.id,
                  title: product.title,
                  image: product.image,
                  price: product.price,
                  quantity: 1,
                  description: product.description,
                })
              )
            }
            className="absolute z-20 w-[100px] text-gray-500 hover:text-gray-900 flex 
          items-center gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0 
          transition-transform cursor-pointer duration-500 py-2"
          >
            Add To Cart{" "}
            <span>
              <FaArrowAltCircleRight />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
