import React from 'react';
import './App.css';
import Card from "./Card"

function App() {
  return (
    <>
      <div className="outer">
        <div className="main">
          <div className="middle">
            <h1>Cari Kerja</h1>
            <br />
            <div className="box">
              <i className="fa fa-search" aria-hidden="true"></i>
              <input type="text" name="" />
              <button type="submit">Submit</button>
            </div>
            <br />
            <div className="contex">
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
            </div>
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
