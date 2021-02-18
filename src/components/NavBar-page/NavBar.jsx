import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  Logo,
  Menu,
  Item,
  LinkAnotherRoute,
  NavIcon,
  Line,
  Overlay,
  OverlayMenu,
} from "./style.js";

const NavBar = () => {
  const [toggle, toggleNav] = useState(false);
  return (
    <>
      <Nav>
        <Logo>
        <a href="https://ibb.co/2PpVCLx"><img src="https://i.ibb.co/4M0vXDz/disney-Land-resort-1.png" alt="disney-Land-resort-1" border="0" height="58px" width="300px"></img></a>
        </Logo>
        <Menu>
          <Item>
            <LinkAnotherRoute>
              <Link to="/">Home</Link>
            </LinkAnotherRoute>
          </Item>
          <Item>
            <LinkAnotherRoute>
              <Link to="/rooms">Rooms</Link>
            </LinkAnotherRoute>
          </Item>
        </Menu>
        <NavIcon onClick={() => toggleNav(!toggle)}>
          <Line open={toggle} />
          <Line open={toggle} />
          <Line open={toggle} />
        </NavIcon>
      </Nav>
      <Overlay open={toggle}>
        <OverlayMenu open={toggle}>
          <Item>
            <LinkAnotherRoute
            >
              Home
            </LinkAnotherRoute>
          </Item>
          <Item>
            <LinkAnotherRoute
            >
              Rooms
            </LinkAnotherRoute>
          </Item>
        </OverlayMenu>
      </Overlay>
    </>
  );
};

export default NavBar;
