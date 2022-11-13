import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useScrollDirection from "../hooks/useScrollDirection";

const Nav = styled.div`
  background: rgba(10, 25, 47, 0.9);
  z-index: 20;
  position: sticky;
  top: 0px;
  height: var(--nav-height);
  transition-property: all;
  transition-duration: 500ms;
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

const NavLogo = styled.a`
  text-decoration: none;
  font-weight: 700;
  font-size: var(--fs-heading);
  margin: 25px;
  padding: 5px;
  color: var(--title);
`;

const NavLinks = styled.a`
  color: var(--white);
  font-size: var(--fs-md);
  text-decoration: none;
  margin: 25px;
  padding: 5px;
  position: relative;
  opacity: 0.85;

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
    transition: all 0.45s;
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
    transition: all 0.45s;
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
    transition: all 0.45s ease-in-out;
    transform: ${({ isOpen }) => isOpen && "translateX(-40px)"};

    ::before,
    ::after {
      content: "";
      position: absolute;
      height: 2px;
      background: var(--title);
      border-radius: 2px;
      transition: all 0.45s ease-in-out;
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
          <NavLinks href="/about">About</NavLinks>
          <NavLinks href="/projects">Projects</NavLinks>
          <NavLinks href="/contact">Contact</NavLinks>
          <NavLinks href="/cv">CV</NavLinks>
        </NavItems>
        {/* TODO make logo */}
        <NavLogo href="/home">Logo</NavLogo>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
