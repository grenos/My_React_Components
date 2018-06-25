import React, { Component } from 'react';
import InputNav from '../input/InputNav';
import NavBrand from '../navBrand/NavBrand';
import './navbar.css';

import styled, { keyframes } from 'styled-components';
import { Col } from 'reactstrap';

//! - - - -  CSS STARTS HERE  - - - -

const onHoverLinkAnim = keyframes`
  from { background-color: transparent; }
  to {
    background-color: rgba(255, 255, 255, 1);
    color: black;
    margin-left: 25px;
  }
`;

const Navbar = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: inherit;
  width: 310px;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0) 100%
  );
`;

const NavWrapper = styled.div`
  margin: 1rem 1rem;
`;

const Link = styled.a`
  font-size: 0.8em;
  letter-spacing: 4px;
  color: #eeeeee;
  font-family: 'Special Elite', cursive;
  &:hover {
    animation: ${onHoverLinkAnim} 0.2s ease-in-out;
    animation-fill-mode: forwards;
  }
  padding: 0.5em 0.5em 0.1em 0.5em;
  margin: 1rem 1rem;
  width: 220px;
`;

//! - - - -  COMPONENT STARTS HERE  - - - -

class NavBar extends Component {
  render() {
    return (
      <Col md="4">
        <Navbar>
          <NavBrand />
          <InputNav />
          <NavWrapper>
            <Link href="">OUR_HOME</Link>
          </NavWrapper>
          <NavWrapper>
            <Link href="">ABOUT_US</Link>
          </NavWrapper>
          <NavWrapper>
            <Link href="">HOME_BASE</Link>
          </NavWrapper>
          <NavWrapper>
            <Link href="">ADVERTISING</Link>
          </NavWrapper>
          <NavWrapper>
            <Link href="">WORK_WITH_US</Link>
          </NavWrapper>
          <NavWrapper>
            <Link href="">PORTFOLIO</Link>
          </NavWrapper>
          <NavWrapper>
            <Link href="">ADVANCED_ERGONOMICS</Link>
          </NavWrapper>
        </Navbar>
      </Col>
    );
  }
}

export default NavBar;
