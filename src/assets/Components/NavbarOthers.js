import React, {Component} from 'react';
import {Container} from "@mui/material";
import logo from "../img/Logo.png";
import Search from "./Search";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserAlt} from "@fortawesome/free-solid-svg-icons";

class NavbarOthers extends Component {
    render() {
        return (
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
                            <ul id="navbar" className="black">
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
                                <li><a href="/login"> <FontAwesomeIcon icon={faUserAlt} /></a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </Container>
        );
    }
}

export default NavbarOthers;
