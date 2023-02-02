import styled from "styled-components";
import starIcon from "../assets/images/icon-star.svg";
import Ratings from "../components/Ratings";
import SubmitButton from "./SubmitButton";
import React from "react";

const RatingPage = (props) => {
  const h = "How did we do?";
  const span =
    "Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!";

  return (
    <div>
      <Container>
        <Star>
          <img src={starIcon} alt="star Icon" />
        </Star>
        <Info>
          <h1>{h}</h1>
          <span>{span}</span>
        </Info>
        <Ratings setPoint={props.setPoint} />
        <SubmitButton setThank={props.setThank} point={props.point} />
      </Container>
    </div>
  );
};

export default RatingPage;

const Container = styled.div`
  width: 412px;
  height: 416px;
  padding: 32px;
  background: radial-gradient(
    98.96% 98.96% at 50% 0%,
    #232a34 0%,
    #181e27 100%
  );
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
`;

const Star = styled.div`
  width: 41px;
  height: 41px;
  margin-bottom: 30px;
  border-radius: 50%;
  background: #262e38;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease;
  &:hover {
    background-color: white;
  }
`;

const Info = styled.div`
  color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;

  span {
    color: #969fad;
    width: 340px;
    height: 72px;
  }
`;
