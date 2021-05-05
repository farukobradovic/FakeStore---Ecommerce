import React from "react";
import { Helmet } from "react-helmet";
import Filters from "../components/Filters";
import Products from "../components/Products";

const Home = () => {
  return (
    <div className='container'>
      <Helmet>
        <title>FakeStore | Products</title>
      </Helmet>
      <div className='main'>
        <Filters />
        <Products />
      </div>
    </div>
  );
};

export default Home;
