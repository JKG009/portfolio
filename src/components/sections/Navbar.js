import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useScrollDirection from "../../hooks/useScrollDirection";
import { Link } from "react-scroll";
import cv from "../documents/cv.pdf";

const Nav = styled.div`
  background: rgba(10, 25, 47, 0.9);
  box-shadow: 0 10px 30px -10px var(--navy-shadow);
  z-index: 20;
  position: sticky;
  top: 0px;
  height: var(--nav-height);
  min-width: var(--min-width);
  transition: var(--transition-ease);
  ${({ scrollDown }) => scrollDown && `top: -10rem;`}
`;

const NavContainer = styled.div`
  height: var(--nav-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--max-width);
  margin: auto;
`;

const NavLogo = styled(Link)`
  text-decoration: none;
  font-weight: 700;
  font-size: var(--fs-heading);
  margin: 25px;
  padding: 5px;
  color: var(--title);
  cursor: pointer;
`;

const NavLinks = styled(Link)`
  color: var(--white);
  font-size: var(--fs-md);
  text-decoration: none;
  margin: 25px;
  padding: 5px;
  position: relative;
  opacity: 0.85;
  cursor: pointer;
  display: inline-block;

  :focus {
    outline: 1px solid var(--white);
    border-radius: var(--border-radius);
  }

  :hover,
  :focus {
    opacity: 1;
  }

  ::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background: var(--title);
    transition: var(--transition-ease);
  }

  :hover::before,
  :focus::before {
    width: 100%;
  }

  @media (max-width: 700px) {
    ::before {
      background: transparent;
    }
  }

  &[data-aos="nav-animation"] {
    transition-property: transform, opacity;
    opacity: 0;
    transform: translateY(-50px);
  }

  &.aos-animate {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const NavCv = styled.a`
  color: var(--title);
  font-size: var(--fs-lg);
  font-family: var(--font-mono);
  text-decoration: none;
  margin: 25px;
  padding: 5px 30px;
  opacity: 0.85;
  background-color: transparent;
  border: 1px solid var(--title);
  border-radius: var(--border-radius);
  transition: background-color 0.5s ease;
  cursor: pointer;
  display: inline-block;

  :hover,
  :focus {
    background-color: var(--tint);
  }
`;

const NavToggle = styled.div`
  display: none;
  z-index: 10;

  @media (max-width: 700px) {
    display: flex;
    width: 50px;
    height: 50px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin: 20px;
  }
`;

const NavItems = styled.div`
  @media (max-width: 700px) {
    position: fixed;
    top: 0;
    display: flex;
    flex-direction: column;
    background: var(--light-navy);
    left: 0;
    width: 60%;
    height: 100%;
    transform: translateX(-100%);
    transition: var(--transition-ease);
    justify-content: center;
    align-items: center;
    transform: ${({ isOpen }) => isOpen && "translateX(0)"};
  }
`;

const NavBurger = styled.div`
  @media (max-width: 700px) {
    position: relative;
    width: 32px;
    height: 2px;
    background: ${({ isOpen }) => (isOpen ? "transparent" : "var(--title)")};
    transition: var(--transition-ease-in-out);
    transform: ${({ isOpen }) => isOpen && "translateX(-40px)"};

    ::before,
    ::after {
      content: "";
      position: absolute;
      height: 2px;
      background: var(--title);
      border-radius: 2px;
      transition: var(--transition-ease-in-out);
    }

    ::before {
      width: ${({ isOpen }) => (isOpen ? "32px" : "25px")};
      transform: ${({ isOpen }) =>
        isOpen ? "rotate(45deg) translate(26px, -26px)" : "translateY(-8px)"};
    }

    ::after {
      width: 32px;
      transform: ${({ isOpen }) =>
        isOpen ? "rotate(-45deg) translate(26px, 26px)" : "translateY(8px)"};
    }
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isOpen]);

  return (
    <Nav scrollDown={scrollDirection === "down"}>
      <NavContainer>
        <NavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <NavBurger isOpen={isOpen}></NavBurger>
        </NavToggle>
        <NavItems isOpen={isOpen}>
          <div
            style={{ display: "inline-block" }}
            data-aos="slide-down"
            data-aos-delay="200"
          >
            <NavCv href={cv} target="_blank">
              CV
            </NavCv>
          </div>
          <NavLinks
            data-aos="nav-animation"
            data-aos-delay="300"
            href="#"
            to="about"
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLinks>
          <NavLinks
            data-aos="nav-animation"
            data-aos-delay="400"
            href="#"
            to="projects"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </NavLinks>
          <NavLinks
            data-aos="nav-animation"
            data-aos-delay="500"
            href="#"
            to="contact"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLinks>
        </NavItems>
        {/* TODO make logo */}
        <NavLogo
          data-aos="fade-in"
          data-aos-easing="ease"
          data-aos-duration="3000"
          href="#"
          to="hero"
        >
          李
        </NavLogo>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
