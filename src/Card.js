import React, { ReactDOM } from "react";
import "./Card.css";

const Card = ({ data, index }) => {
  const { Poster, Title, Type, Year, imdbID } = data;
  const onMouseOver = (id) => {
    let element = document.getElementById(id);
    element.classList.remove("hiddenItems");
    console.log(element);
  };
  const onMouseLeave = (id) => {
    let element = document.getElementById(id);
    element.classList.add("hiddenItems");
    console.log(element, 213);
  };
  return (
    <div
      className="cardMainDiv"
      onMouseOver={() => onMouseOver(index)}
      onMouseLeave={() => onMouseLeave(index)}
    >
      <img className="imageOfCard" src={Poster} alt="" />
      <div className="hiddenElements">
        <div id={index} className="hiddenItems">
          <h4>{Title}</h4>
          <div className="cardSpan">
            <span>Type: {Type}</span>
            <span>Year: {Year}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
