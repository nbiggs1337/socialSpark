import React from 'react'
import classnames from "classnames";
import "../../../assets/vendor/nucleo/css/nucleo.css";
import { Link, useNavigate } from 'react-router-dom'
import {
    UncontrolledCollapse,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    UncontrolledDropdown,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col, 
    Alert
} from "reactstrap";

export default function MainNavbar() {
    return (
        <Navbar className="navbar-dark bg-success mt-0 p-0 d-flex" expand="lg">
            <Container>
                <NavbarBrand className="d-flex" href="#pablo" onClick={(e) => e.preventDefault()}>
                    <i className="ni ni-chart-bar-32 "></i>
                    <h1 className='display-3'>SocialSpark!</h1>
                </NavbarBrand>
                <button className="navbar-toggler" id="navbar-success">
                    <span className="navbar-toggler-icon" />
                </button>
                <UncontrolledCollapse navbar toggler="#navbar-success">
                    <div className="navbar-collapse-header">
                        <Row>
                            <Col className="collapse-brand" xs="6">
                                <Link to="/">
                                    <img
                                        alt="..."
                                        src={require("../../../assets/img/brand/argon-react.png")}
                                    />
                                </Link>
                            </Col>
                            <Col className="collapse-close" xs="6">
                                <button className="navbar-toggler" id="navbar-success">
                                    <span />
                                    <span />
                                </button>
                            </Col>
                        </Row>
                    </div>
                    <Nav className="ml-lg-auto" navbar>
                        <NavItem>
                            <NavLink
                                className="nav-link-icon"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                            >
                                <Alert color="info" className="m-0 px-3 py-2">
                                    <em><strong>Welcome! </strong></em> Your current balance is <strong>$203.84</strong>
                                </Alert>
                                
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className="nav-link-icon"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                            >
                                <i className="ni ni-favourite-28" />
                                <span className="nav-link-inner--text d-lg-none">
                                    Favorites
                                </span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className="nav-link-icon"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                            >
                                <i className="ni ni-planet" />
                                <span className="nav-link-inner--text d-lg-none">
                                    Another action
                                </span>
                            </NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav className="nav-link-icon">
                                <i className="ni ni-settings-gear-65" />
                                <span className="nav-link-inner--text d-lg-none">
                                    Settings
                                </span>
                            </DropdownToggle>
                            <DropdownMenu
                                aria-labelledby="navbar-success_dropdown_1"
                                right
                            >
                                <DropdownItem
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    Action
                                </DropdownItem>
                                <DropdownItem
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    Another action
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    Something else here
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </UncontrolledCollapse>
            </Container>
        </Navbar>
    )
}

