import React from "react";

import plusIcon from "../assets/images/plus-icon.png";
import playIcon from "../assets/images/play-icon.png";

const CarouselItem = () => (
  <div className="carousel-item">
    <img
      className="carousel-item__img"
      src="https://source.unsplash.com/random/newyork"
      alt="Image movie"
    />
    <div className="carousel-item__details">
      <div>
        <img src={plusIcon} alt="icon" />
        <img src={playIcon} alt="icon" />
      </div>
    </div>
    <p className="carousel-item__details--title">Título descriptivo</p>
    <p className="carousel-item__details--subtitle">2021 16+ 114 minutos</p>
  </div>
);

export default CarouselItem;
