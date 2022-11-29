import React from "react";
import styled from "styled-components";
import { frontSkills, otherSkills } from "../../config";

const AboutContainer = styled.section`
  max-width: var(--max-width);
  margin: auto;
  padding: 100px 80px 160px;

  h2 {
    color: var(--darker-white);
    font-size: clamp(26px, 5vw, var(--fs-heading));
    margin-bottom: 30px;

    :after {
      content: "";
      display: block;
      position: relative;
      top: -20px;
      left: 180px;
      width: 350px;
      height: 3px;
      margin-left: 20px;
      background-color: var(--lightest-navy);
    }
  }

  > div {
    display: flex;
    font-size: var(--fs-md);
    color: var(--grey);
  }

  @media (max-width: 1024px) {
    padding: 60px 0;
    h2 {
      :after {
        width: calc(100vw - 50vw);
      }
    }

    > div {
      display: initial;
    }
  }

  @media (max-width: 600px) {
    h2 {
      :after {
        width: calc(100vw - 60vw);
        margin-left: -20px;
      }
    }
  }

  @media (max-width: 420px) {
    h2 {
      :after {
        margin-left: -40px;
      }
    }
  }
`;

const AboutTextContainer = styled.div`
  width: 50%;
  padding: 0.5rem 1rem;

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 375px) {
    padding: 0;
  }
`;

const AboutText = styled.p`
  line-height: 2;
  padding: 1rem 2rem;

  @media (max-width: 1024px) {
    padding: 0.5rem 1rem;
  }

  @media (max-width: 375px) {
    padding: 0.5rem 0;
  }
`;

const AboutSkillsContainer = styled.div`
  width: 50%;
  background-color: var(--light-navy);
  border-radius: var(--container-border-radius);

  h3 {
    color: var(--darkest-white);
    padding: 1rem 2rem;
  }

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 700px;
    margin: 1rem auto 0;
  }
`;

const AboutSkillLogos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 1rem;
`;

const AboutSkillLogo = styled.div`
  width: 120px;
  height: 120px;
  text-align: center;
  margin: 0.4rem 0.8rem;

  img {
    height: 60px;
    width: 60px;
  }

  p {
    font-size: var(--fs-xs);
    font-weight: bold;
    color: var(--grey);
  }

  @media (max-width: 375px) {
    height: 80px;
    width: 80px;

    img {
      height: 40px;
      width: 40px;
    }
  }
`;

const About = () => {
  return (
    <AboutContainer id="about">
      <h2>About Me</h2>
      <div>
        <AboutTextContainer>
          <AboutText>
            I am a self-taught frontend developer who began his coding journey
            in 2021. Utilizing free online resources such as FreeCodeCamp and
            Youtube videos, I have aquired the skills required to make impactful
            and well designed applications and websites on my own.
          </AboutText>
          <AboutText>
            I strive to write clean and maintainable code so it is easier to
            read, for both myself and anyone who comes across my work.
          </AboutText>
          <AboutText>
            {" "}
            While I am continuously refining my skills in my go-to tech stack, I
            often find myself looking into new technologies that are commonly
            used in modern applications and try to learn and incorporate them
            into my future projects.
          </AboutText>
        </AboutTextContainer>
        <AboutSkillsContainer>
          <div>
            <h3>Tech Skills</h3>
            <AboutSkillLogos>
              {frontSkills.map(({ name, src }) => (
                <AboutSkillLogo key={name}>
                  <img src={src} alt={name} />
                  <p>{name}</p>
                </AboutSkillLogo>
              ))}
            </AboutSkillLogos>
          </div>
          <div>
            <h3>Others</h3>
            <AboutSkillLogos>
              {otherSkills.map(({ name, src }) => (
                <AboutSkillLogo key={name}>
                  <img src={src} alt={name} />
                  <p>{name}</p>
                </AboutSkillLogo>
              ))}
            </AboutSkillLogos>
          </div>
        </AboutSkillsContainer>
      </div>
    </AboutContainer>
  );
};

export default About;
