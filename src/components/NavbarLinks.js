import React, { useContext } from "react"
import styled from "styled-components"
import { navigate } from "gatsby"

const NavItem = styled.a`
  text-decoration: none;
  color: #111;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #4c9c41;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: #4c9c41;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`

const Logout = styled.span`
  text-decoration: none;
  color: #111;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;
  cursor: pointer;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #0086d1;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: #0086d1;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`
const NavbarLinks = () => {

  return (
    <>
      <NavItem href="/">HOME</NavItem>
      <NavItem href="/about">ABOUT</NavItem>
      <NavItem href="/contact">CONTACT</NavItem>
    </>
  )
}

export default NavbarLinks