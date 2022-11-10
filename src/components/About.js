import React from "react";
import styled from "styled-components";

const AboutSection = styled.div`
  position: relative;
  padding-top: 5vh;
  background-color: var(--navy);
  height: 100vh;
`;

const AboutContainer = styled.section`
  max-width: var(--max-width);
  margin: auto;
  padding: 0 5vw 0 5vw;

  h2 {
    color: var(--darker-white);
    :after {
      content: "";
      display: block;
      position: relative;
      top: -15px;
      left: 120px;
      width: 50vw;
      height: 3px;
      margin-left: 20px;
      background-color: var(--lightest-navy);
    }
  }
`;

const About = () => {
  return (
    <AboutSection>
      <AboutContainer>
        <h2>About Me</h2>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
