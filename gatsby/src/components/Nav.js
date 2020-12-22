import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavStyles = styled.nav`
  height: 70px;
  font-family: aktiv-grotesk;
  display: flex;
  background: white;
  flex-direction: row;
  ul li a {
    font-family: aktiv-grotesk;
    margin: 0;
    padding: 0;
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <ul>
        <li>
          <Link to="/">Home </Link>
        </li>
        <li>
          <Link to="/content">Content</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
      </ul>
    </NavStyles>
  );
}
