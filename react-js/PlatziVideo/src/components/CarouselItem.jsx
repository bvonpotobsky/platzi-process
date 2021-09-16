import React from "react";

import plusIcon from "../assets/images/plus-icon.png";
import playIcon from "../assets/images/play-icon.png";

const CarouselItem = ({ cover, title, year, contentRating, duration }) => (
  <div className="carousel-item">
    <img className="carousel-item__img" src={cover} alt={title} />
    <div className="carousel-item__details">
      <div>
        <img src={plusIcon} alt="Plus icon" />
        <img src={playIcon} alt="Play icon" />
      </div>
    </div>
    <p className="carousel-item__details--title">{title}</p>
    <p className="carousel-item__details--subtitle">
      {`${year} ${contentRating} ${duration}`}
    </p>
  </div>
);

export default CarouselItem;
