import { useState } from 'react';

import './App.css';

const App = () => {
  return (
    <>
      <nav>
        <div className="img">
          <img src="/images/nike-logo.png" alt="" />
        </div>
        <div className="a2">
          <h3>Menu</h3>
          <h3>Location</h3>
          <h3>About</h3>
          <h3>Contact</h3>
        </div>
        <div className="btn">
          <button>Login</button>
        </div>
      </nav>
      <div className="container-main">
        <div className="container">
          <div className="texts">
            <div className="text">
              <h1>YOUR FEET DESERVE THE BEST</h1>
              <p>
                your feet deserve the best and we here to help you with your
                help .your feet deserve the best and we here to help you with
                your help
              </p>
              <div className="buttons">
                <div className="btn1">
                  <button>Shop now</button>
                </div>
                <div className="btn2">
                  <button>category</button>
                </div>
              </div>
              <div className="shopping">
                <p>Also Available Now </p>
              </div>
              <div className="images">
                <img src="/images/flipcart-logo.png" alt="" />
                <img className="img2" src="/images/amazon-logo.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="image">
          <img src="/images/shoes.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default App;
