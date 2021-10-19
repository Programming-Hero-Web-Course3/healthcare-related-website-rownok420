import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import "./Header.css";
import logo from "../../../images/logo3.svg";

const Header = () => {
    const { user, logOut } = useAuth();
    const activeStyle = {
        fontWeight: "bold",
        color: "rgb(244, 199, 11)",
        textDecoration: "underline",
    };
    return (
        <Navbar className="nav-style" expand="lg">
            <Container fluid>
                <Navbar.Brand>
                    <NavLink to="/">
                        <img
                            className="logo text-white"
                            src={logo}
                            alt="logo"
                        />
                    </NavLink>
                </Navbar.Brand>

                <Navbar.Toggle
                    aria-controls="navbarScroll"
                    className="bg-white"
                />

                <Navbar.Collapse id="navbarScroll">
                    <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
                        <NavLink activeStyle={activeStyle} to="/home">
                            Home
                        </NavLink>
                        <NavLink activeStyle={activeStyle} to="/about">
                            About us
                        </NavLink>
                        <NavLink activeStyle={activeStyle} to="/department">
                            Our Department
                        </NavLink>
                        <NavLink activeStyle={activeStyle} to="/appointment">
                            Appointment
                        </NavLink>
                        <NavLink activeStyle={activeStyle} to="/contact">
                            Contact us
                        </NavLink>
                    </Nav>

                    {user.email ? (
                        <div>
                            <NavLink to="/register">
                                <button
                                    onClick={logOut}
                                    className="rounded-pill login-btn"
                                >
                                    Log out
                                </button>
                            </NavLink>
                        </div>
                    ) : (
                        <div>
                            <NavLink to="/register">
                                <button className="rounded-pill login-btn">
                                    Login
                                </button>
                            </NavLink>
                        </div>
                    )}

                    {user?.photoURL && (
                        <Navbar.Brand>
                            <img
                                src={user?.photoURL}
                                width="35"
                                height="35"
                                className="d-inline-block align-top rounded-circle m-2 me-0"
                                alt=""
                            />
                        </Navbar.Brand>
                    )}

                    {user?.email && (
                        <Navbar.Brand className="name-style py-0 text-white">
                            <h6>{user?.email.substring(0, user.email.lastIndexOf("@"))}</h6>
                        </Navbar.Brand>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
