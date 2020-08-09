import React, { useState, useContext } from "react"
import styled from "styled-components"
import NavbarLinks from "./NavbarLinks"
// import {FirebaseContext} from './Firebase';

const Navigation = styled.nav`
  height: 8vh;
  display: flex;
  background-color: #fff;
  position: relative;
  justify-content: space-between;
  text-transform: uppercase;
  margin: 0 auto;
  padding: 0 5vw;
  z-index: 2;
  align-items: center;

  @media (max-width: 768px) {
    position: sticky;
    height: 6.5vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0;

  @media (max-width: 768px) {
    display: flex;
  }
`

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: #fff;
    transition: all 0.3s ease-in;
    top: 6.5vh;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`

const Hamburger = styled.div`
  background-color: #111;
  width: 25px;
  height: 1.5px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 25px;
    height: 1.5px;
    background-color: #111;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-9px, 0px)" : "rotate(0deg)"};
    top: -8px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 8px;
  }
`

const LogoImage = styled.img`
  height:30px;
  width:30px;
  object-fit: cover;
  margin-top: 0px;
  margin-bottom: 0px;
  vertical-align: middle;
  border-radius: 50%;
  position: absolute;
  right: 5vw;
`

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <>
    <Navigation>
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <NavbarLinks
          navbarOpen={navbarOpen}
          onClick={() => setNavbarOpen(!navbarOpen)}
          />
        </Navbox>
      ) : (
        <Navbox open>
          <NavbarLinks />
        </Navbox>
      )}
      <div>
        <a href="/"
          style={{
            display: `flex`,
            alignItems: `center`,
          }}
        >
          <LogoImage 
            src="https://firebasestorage.googleapis.com/v0/b/runscareer-korea.appspot.com/o/logo.png?alt=media&token=d2c66a5d-1840-4515-95e8-1d9d35924b25"
            alt="image"
          ></LogoImage>
        </a>
      </div>
    </Navigation>
    </>
  )
}

export default Header