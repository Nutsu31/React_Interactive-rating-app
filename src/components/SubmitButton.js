import React from "react";
import styled from "styled-components";

const SubmitButton = (props) => {
  return (
    <ButtonSubmit onClick={() => props.setThank(true)}>Submit</ButtonSubmit>
  );
};

export default SubmitButton;
const ButtonSubmit = styled.button`
  color: white;
  font-family: "Overpass";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 2px;
  width: 100%;
  height: 45px;
  background: #fc7614;
  border: none;
  border-radius: 22px;
  transition: 0.3s ease;
  &:hover {
    color: #fc7614;
    background-color: white;
  }
`;
