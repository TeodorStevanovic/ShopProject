import React from 'react';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Cart from './pages/Cart';
import { productsData } from './api/Api';
import Product from './components/Product';
import Login from './pages/Login';
import Shop from './pages/Shop'; 
import Contact from './pages/Contact';
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
