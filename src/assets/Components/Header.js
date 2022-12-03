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
import FoodPage from "../Pages/FoodPage";
import RestaurantPage from "../Pages/RestaurantPage";
import ResReserv from "../Pages/Res-reserv";
import Reg from "../Pages/Reg";
import Basket from "../Pages/Basket";
import EntertainmentPage from "../Pages/EntertainmentPage";
import TourPage from "../Pages/TourPage";
import Charyn from "../Pages/Charyn";
import EntertainmentPageReserv from "../Pages/EntertainmentPageReserv";


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
                        <Route exact path= "/reddragon" element = {<FoodPage />} />
                        <Route exact path="/dijon" element = {<RestaurantPage />} />
                        <Route exact path="/res-reserv" element ={<ResReserv />} />
                        <Route exact path="/reg" element ={<Reg />} />
                        <Route exact path="/basket" element ={<Basket />} />
                        <Route exact path="/entertainmentpage" element ={<EntertainmentPage />} />
                        <Route exact path="/tourpage" element = {<TourPage />} />
                        <Route exact path="/tourpage-charyn" element={<Charyn />} />
                        <Route exact path="/entertainmentpageres" element={<EntertainmentPageReserv />} />

                    </Routes>
                </Router>
            </div>
        );
    }
}

export default Header;
