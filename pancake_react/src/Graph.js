import React from "react";
import "./swap.css";
import SecondChartComponent from "./SecondChartComponent";
import { useState, useEffect } from "react";
import Calculator from "./Calculator";

const Graph = (props) => {
  const [buttonInfo, setButtonInfo] = useState("1y");
  const [coinValue, setCoinValue] = useState("64");

  const handleClick = (event) => {
    setButtonInfo(event.target.innerHTML);
  };
  useEffect(() => handleSetCoinValue, []);
  function handleSetCoinValue(data) {
    setCoinValue(data);
  }

  return (
    <div className="main">
      <div className="graph">
        <div className="top">
          <div className="top-left">
            <img
              id="coin-icon-1"
              src="assets/binance-coin-bnb-icon.svg"
              alt="coin-1-logo"
              height="20px"
              width="20px"
            />
            <img
              src="assets/pancakeswap-cake-logo.svg"
              alt="coin-2-logo"
              height="20px"
              width="20px"
            />
            <p>
              <span className="coin1">BNB</span>/
              <span className="coin2">CAKE</span>
            </p>
            <button className="switch-btn">
              <i className="fa-solid fa-sm fa-repeat"></i>
            </button>
          </div>
          <div className="top-right">
            <button>
              <i className="fa-solid fa-expand"></i>
            </button>
          </div>
        </div>
        <div className="middle">
          <div className="middle-left">
            <p>
              <span className="coin-rate">{coinValue}</span> BNB/CAKE
              <span className="coin-difference">-2.022(%2.43)</span>
            </p>
          </div>
          <div onClick={handleClick} className="middle-right">
            <button className="btn day">24h</button>
            <button className="btn week">1w</button>
            <button className="btn month">1m</button>
            <button className="btn clicked year">1y</button>
          </div>
        </div>
        <div id="tvchart">
          <SecondChartComponent
            buttonInfo={buttonInfo}
            handleSetCoinValue={handleSetCoinValue}
          ></SecondChartComponent>
        </div>
      </div>
      <Calculator></Calculator>
    </div>
  );
};

export default Graph;
