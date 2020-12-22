import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import InstagramIcon from "../icons/InstagramIcon";

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

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
`;

const SocialItem = styled.a`
  padding: 10px;
`;

const Spacing = styled.div`
  padding: ${props => props.spacingAmount ? props.spacingAmount : "15px"};
  background-color: ${props => props.color ? props.color : "red"};
`;



export default function Nav() {
  return (
    <NavStyles>
      <SocialLinks>
        <SocialItem>
          <InstagramIcon />
        </SocialItem>
      </SocialLinks>
      <Spacing color={"purple"} spacingAmount={"1px"}/>
    </NavStyles>
  );
}

{
  /* <ul>
<li>
  <a href=""></a>
</li>
<li>
  <Link to="/">Home</Link>
</li>
<li>
  <Link to="/content">Content</Link>
</li>
<li>
  <Link to="/portfolio">Portfolio</Link>
</li>
<li>
  <Link to="/about">About</Link>
</li>
</ul> */
}
