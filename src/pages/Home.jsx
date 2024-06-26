import React from "react";
import { useState } from "react";
import Navigation from "../Navigation/Nav";
import Products from "../Products/Products";
import { products } from "../database/data";
import Recommended from "../Recommended/Recommended";
import Sidebar from "../Sidebar/Sidebar";
import Card from "../components/Card";
import "../index.css";
import "./Home.css"

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title, gender, available }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected ||
          gender === selected ||
          selected === "instock" ? available > 0 : false ||
          selected === "outofstock" ? available === 0 : false
      );
    }

    return filteredProducts.map(
      (product) => (
        <Card
          product = {product}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);
  console.log(selectedCategory);
  return (
    <>
      <div className="flex-container">
        <Sidebar handleChange={handleChange} />
        <main className="main-section">
          <Navigation query={query} handleInputChange={handleInputChange} />
          <Recommended handleClick={handleClick} />
          <Products result={result} />
        </main>
      </div>
    </>
  );
};

export default Home;
