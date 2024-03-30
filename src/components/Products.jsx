import React from "react";
import CartProduct from "./CartProduct";

const Products = ({ products }) => {
  return (
    <div className="py-20">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl bg-black text-white py-2 w-80 text-center font-bodyFont">
          Our Products
        </h1>

        <span className="w-20 h-[2px] bg-black"></span>

        <p className="max-w-[700px] text-gray-600 text-center font-bodyFont">
          We use only the highest quality materials to ensure the durability and
          comfort of our products. Whether you're looking for classic pieces
          that will last for years or trendy items that follow the latest
          fashion trends, our collection has something for everyone. In our
          range, you can find everything from elegant pieces suitable for
          business meetings to casual items perfect for relaxed gatherings with
          friends.
        </p>
      </div>
      <div
        className="gap-20 py-10 
      lg:max-w-screen-xl lg:mx-auto lg:grid lg:grid-cols-3 
      sm: max-w-sm sm: mx-auto sm: grid sm: grid-cols-1 "
      >
        {products.map((item) => (
          <CartProduct key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
