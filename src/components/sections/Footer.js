import React from "react";
import styled from "styled-components";
import Icon from "../icons/icon";
import { social } from "../../config";

const Social = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  left: 40px;

  :after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 15px auto 0;
    background-color: var(--grey);
  }

  @media (max-width: 1600px) {
    display: block;
    min-width: var(--min-width);

    position: static;
    text-align: center;
    margin: 5px 0;

    :after {
      display: none;
    }
  }

  a {
    color: var(--darkest-white);
    text-decoration: none;

    :hover {
      color: var(--title);
    }

    @media (max-width: 1600px) {
      margin: 0 10px;
    }

    svg {
      transition: var(--transition-ease);
      width: 20px;
      height: 20px;
      margin-top: 15px;

      @media (max-width: 1600px) {
        margin: 0;
      }

      :hover {
        transform: scale(1.2);
      }
    }
  }
`;
const FooterContainer = styled.div`
  max-width: var(--max-width);
  min-width: var(--min-width);
  margin: auto;
  text-align: center;
  padding-bottom: 15px;

  p {
    color: var(--darkest-white);
    font-family: var(--font-mono);
    font-weight: bold;
    margin: 5px 0;
  }
`;

const Footer = () => {
  const { github, linkedIn } = social;
  return (
    <>
      <Social>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <Icon name="GitHub" />
        </a>
        <a href={linkedIn} target="_blank" rel="noopener noreferrer">
          <Icon name="LinkedIn" />
        </a>
      </Social>
      <FooterContainer>
        <p>geoffrey_lee_208@hotmail.com</p>
        <p>peilee.com | &copy; 2022</p>
      </FooterContainer>
    </>
  );
};

export default Footer;
