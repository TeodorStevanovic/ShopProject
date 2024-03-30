import React, { useEffect, useState } from "react";
import Products from "../components/Products";
import { useLoaderData } from "react-router-dom";
import { productsData } from "../api/Api";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  console.log('here');

  useEffect(() => {
    productsData().then(r => setProducts(r.data))
    .catch(error=>setError(error))
    .finally(()=>setLoading(false));
  },[]);

  if (loading) {

    return (
      <p className="flex justify-center items-center">Loading</p>
    )
  }

  if (error) {

    return (
      <p>Error</p>
    )
  }

  return (
    <div>
      <Products products={products} />
    </div>
  );
};

export default Shop;
