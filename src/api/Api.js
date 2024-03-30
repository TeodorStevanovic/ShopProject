import axios from "axios";

export async function productsData() {
  const products = await axios.get(
    " https://fakestoreapi.com/products/category/women's clothing"
  );

  return products;
}
