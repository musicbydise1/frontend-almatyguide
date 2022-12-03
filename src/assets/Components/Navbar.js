import React, {Component} from 'react';
import logo from "../img/Logo.png"
import "../Styles/NavbarStyles.css";
import Search from "./Search";
import {faUserAlt} from "@fortawesome/free-solid-svg-icons"
import {faShoppingBasket} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Container} from "@mui/material";

class Navbar extends Component {
    render() {
        return (
                <div className="dark-back">
                    <Container>
                    <div className="navigation-panel">
                        <nav>
                            <a href="/">
                                <img src={logo}
                                     alt=""
                                     height=""
                                     className="d-inline-block align-top"
                                     alt="Logo"

                                />
                            </a>
                            <div>
                                <ul id="navbar">
                                    <li><a href="/food">Food</a></li>
                                    <li><a href="/entertainment">Entertainment</a></li>
                                    <li><a href="/events">Events</a></li>
                                    <li><a href="/tours">Tours</a></li>
                                    <li><a href="/movement">Movement</a></li>
                                    <li><a href="/contacts">Contacts</a></li>
                                </ul>
                            </div>
                            <div>
                                <ul id="navbar">
                                    <li><Search /></li>
                                    <li><a href="/basket"> <FontAwesomeIcon icon={faShoppingBasket} /> </a></li>
                                    <li><a href="/login"> <FontAwesomeIcon icon={faUserAlt} /></a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    </Container>
                </div>
        );
    }
}

export default Navbar;
