import React, { useState } from "react";
import styled, { css } from "styled-components";
import ratingCSS from "../components/ratings.module.css";

const Ratings = (props) => {
  const numbers = [1, 2, 3, 4, 5];
  const [active, setActive] = useState(null);

  const eachButton = numbers.map((num) => {
    return (
      <ButtonRatings
        value={num}
        key={Math.random() * Math.random() * Math.random()}
        onClick={() => {
          setActive(num);
          props.setPoint(num);
        }}
        active={active === num}
      >
        {num}
      </ButtonRatings>
    );
  });
  return <div className={ratingCSS.div}>{eachButton}</div>;
};

export default Ratings;

const ButtonRatings = styled.button(
  (props) => css`
    color: ${props.active ? "White" : "#7c8798"};
    font-size: 18px;
    width: 51px;
    height: 51px;
    border: none;
    border-radius: 50%;
    background-color: ${props.active ? "#7C8798" : "#262e38"};
    transition: 0.3s ease;
    &:hover {
      color: white;
      background-color: orangered;
    }
  `
);
