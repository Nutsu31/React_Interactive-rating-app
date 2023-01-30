import ThankImg from "../assets/images/illustration-thank-you.svg";
import styled from "styled-components";
import React from "react";

const ThankPage = (props) => {
  const thankYou = "Thank you!";
  const paragraph =
    "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!";

  return (
    <Container>
      <img src={ThankImg} />
      <FlexBox>
        <Points>You selected {props.point} out of 5</Points>
        <H1>{thankYou}</H1>
        <Par>{paragraph}</Par>
      </FlexBox>
    </Container>
  );
};

export default ThankPage;

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
  align-items: center;
  justify-content: space-evenly;
`;

const Points = styled.div`
  color: #fc7614;
  width: 193px;
  heigth: 38px;
  background: #262e38;
  border-radius: 22.5px;
  text-align: center;
`;

const H1 = styled.h1`
  color: white;
  text-align: center;
  font-weight: 700;
  font-size: 28px;
  line-height: 35px;
`;

const Par = styled.p`
  color: #969fad;
  text-align: center;
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
`;
