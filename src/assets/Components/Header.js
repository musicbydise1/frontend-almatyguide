import React, {Component} from 'react';
import Navbar from "../Components/Navbar";
import logo from '../img/Logo.png'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from '../Pages/Home'
import Food from '../Pages/Food'
import Entertainment from '../Pages/Entertainment'
import Events from '../Pages/Events'
import Tours from '../Pages/Tours'
import Movement from '../Pages/Movement'
import Contacts from '../Pages/Contacts'
import Login from '../Pages/Login'
import Reddragon from "../Pages/Reddragon";
import Dijon from "../Pages/Dijon";
import ResReserv from "../Pages/Res-reserv";
import Reg from "../Pages/Reg";


class Header extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Router>
                    <Routes>
                        <Route exact path= "/" element = {<Home />} />
                        <Route exact path= "/food" element = {<Food />} />
                        <Route exact path= "/entertainment" element = {<Entertainment />} />
                        <Route exact path= "/events" element = {<Events />} />
                        <Route exact path= "/tours" element = {<Tours />} />
                        <Route exact path= "/movement" element = {<Movement />} />
                        <Route exact path= "/contacts" element = {<Contacts />} />
                        <Route exact path= "/login" element = {<Login />} />
                        <Route exact path= "/reddragon" element = {<Reddragon />} />
                        <Route exact path="/dijon" element = {<Dijon />} />
                        <Route exact path="/res-reserv" element ={<ResReserv />} />
                        <Route exact path="/reg" element ={<Reg />} />

                    </Routes>
                </Router>
            </div>
        );
    }
}

export default Header;
