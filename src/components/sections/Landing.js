import React from "react";
import styled from "styled-components";

const LandingContainer = styled.section`
  margin: auto;
  margin-bottom: 100px;
  height: 100vh;
  max-width: var(--max-width);
  width: 100%;
  padding: 0 10vw 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    color: var(--title);
    font-family: var(--font-mono);
    font-size: clamp(var(--fs-sm), 5vw, var(--fs-md));
    font-weight: 400;
  }

  h2 {
    color: var(--darker-white);
    font-size: clamp(50px, 8vw, 90px);
    margin: 15px 0 5px;
  }

  h3 {
    color: var(--white);
    margin: 0px;
    font-size: clamp(20px, 7vw, 60px);
    margin: 5px 0 25px;
  }

  h4 {
    color: var(--darkest-white);
    font-size: clamp(var(--fs-xxs), var(--fs-md), var(--fs-lg));
  }

  @media (max-width: 785px) {
    padding: 0;
  }
`;

const Hero = () => {
  return (
    <LandingContainer id="hero">
      <h1>My name is</h1>
      <h2>Geoffrey Lee.</h2>
      <h3>Welcome to my page!</h3>
      <h4>I am a self-taught Frontend Web Developer.</h4>
    </LandingContainer>
  );
};

export default Hero;
