import React from "react";
import styled from "styled-components";

const LoaderContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  animation: fadeBackground 2600ms ease;
  background-color: var(--dark-navy);

  @keyframes fadeBackground {
    80% {
      background-color: var(--dark-navy);
    }
    100% {
      background-color: var(--navy);
    }
  }
`;

const LoaderLogo = styled.img`
  width: 150px;
  height: 150px;
  display: block;
  margin: auto;
  animation: fadeLogo 2600ms ease-in;

  @keyframes fadeLogo {
    80% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(0.6);
    }
  }
`;

const Loader = () => {
  return (
    <LoaderContainer>
      <LoaderLogo src="imgs/portfolio_logo.png" alt="" />
    </LoaderContainer>
  );
};

export default Loader;
