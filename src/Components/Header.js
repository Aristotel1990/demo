import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import SignOutModal from "./SignOutModal";
import SignInModal from "./SignInModal";
import { useStateValue } from "../reducers/StateProvider";

function Header({ history }) {
  const [{ isLogin }, dispatch] = useStateValue();

  return (
    <div style={{ background: "black" }}>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link>
              <Link to="/home" style={{ color: "grey" }}>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/feature" style={{ color: "grey" }}>
                Feature
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about" style={{ color: "grey" }}>
                About
              </Link>
            </Nav.Link>
          </Nav>
          <Nav>
            {isLogin === true ? (
              <Nav.Link>
                <Link>
                  <SignOutModal history={history} />
                </Link>
              </Nav.Link>
            ) : (
              <Nav.Link>
                <Link>
                  <SignInModal history={history} />
                </Link>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
