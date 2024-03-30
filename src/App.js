import React from 'react';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from 'react-router-dom';
import Cart from './pages/Cart';
import { productsData } from './api/Api';
import Product from './components/Product';
import Login from './pages/Login';
import Blog from './pages/Blog'; //Imported missing component
import Shop from './pages/Shop'; //Imported missing component
import Contact from './pages/Contact'; //Imported missing component
import Products from './components/Products';
import SuccesfulPayment from './components/SuccesfulPayment';

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: productsData,
      },
      {
        path: '/product/:id',
        element: <Product />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'log-in',
        element: <Login />,
      },
      {
        path: 'blog',
        element: <Blog />,
      },
      {
        path: 'shop',
        element: <Shop />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'successfulPayemnt',
        element: <SuccesfulPayment />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
