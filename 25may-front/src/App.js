import "./App.css";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { BsFillCartFill } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { BsFilter } from "react-icons/bs";

const App = () => {
  return (
    <div>
      <nav className="nav1">
        <div className="parag">
          <p>Free shipping for standard order over $100</p>
          <ul className="nav1-list">
            <li className="f1">Help & FAQs</li>
            <li className="f2">My Account</li>
            <li className="f3">EN</li>
            <li className="f4">USD</li>
          </ul>
        </div>
      </nav>
      <nav className="nav2">
        <div className="first">
          <img
            className="coza"
            src="https://preview.colorlib.com/theme/cozastore/images/icons/logo-01.png.webp"
          ></img>
        </div>
        <div className="second">
          <ul className="nav2-list">
            <li className="r1">Home</li>
            <li className="r2">Shop</li>
            <li className="r3">Features</li>
            <li className="r4">Blog</li>
            <li className="r5">About</li>
            <li className="r6">Contact</li>
          </ul>
          <div className="icons">
            <BsSearch className="q1" />
            <BsFillCartFill className="q2" />
            <BsHeart className="q3" />
          </div>
        </div>
      </nav>
      <div className="first-page">
        <div className="side-1">
        <div className="words-1">
            <h3>Men Collection</h3>
            <h1>New Arriwals</h1>
          </div>
          <button className="btn-1">SHOP NOW</button>
        </div>
      </div>
      <div className="second-page">
        <div className="cards">
          <div className="card1">
            <h3>Women</h3>
            <p>Spring 2018</p>
          </div>
          <div className="card2">
            <h3>Men</h3>
            <p>Spring 2018</p>
          </div>
          <div className="card3">
            <h3>Accessories</h3>
            <p>New Trend</p>
          </div>
        </div>
      </div>
      <div className="third-page">
        <h1 className="product-1">PRODUCT OVERVIEW</h1>
        <div className="side2">
        <ul className="nav3-list">
          <li className="a1">All Products</li>
          <li className="a2">Women</li>
          <li className="a3">Men</li>
          <li className="a4">Bag</li>
          <li className="a5">Shoes</li>
          <li className="a6">Watches</li>
        </ul>
        <div className="btns">
          <button className="btn-2">
          <BsFilter></BsFilter>
          Filter
          </button>
          <button className="btn-3">
            <BsSearch></BsSearch>
            Search
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default App;
