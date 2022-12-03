import React, {Component} from 'react';
import {Container} from "@mui/material";
import item_img from "../../img/burgerkingmain.png"
import "../../Styles/FoodPageTabStyle..css"
import MenuTab from "./MenuTab";

class FoodPageTab extends Component {
    render() {
        return (
            <div>
                <Container>
                    <div className="food-tabs foodpage">
                        <div>
                            <ul id="foood">
                                <li className="food-active"><a href="/food">Fast food</a></li>
                                <li><a href="/food">Restaurants</a></li>
                                <li><a href="/food">Canteens</a></li>
                                <li><a href="/food">Coffee houses</a></li>
                                <li><a href="/food">Steakhouses</a></li>
                                <li><a href="/food">Bars/pubs</a></li>
                            </ul>
                        </div>
                        <div className="foodpage-items">
                            <div className="foodpage-item">
                                <div className="foodpage-item-img">
                                    <img src={item_img} alt=""/>
                                </div>
                                <div className="foodpage-item-description">
                                    <div className="foodpage-item-title">
                                        <h1>Burger King</h1>
                                    </div>
                                    <div className="foodpage-item-text">
                                        <div className="foodpage-address">
                                            <p><b>Addresses:</b> <br/>
                                                Ave. Abaya 109v/1 <br/>
                                                Ave. Abaya 89 <br/>
                                                Zhumaliev street 144 <br/>
                                                Rozybakiev street 273 <br/>
                                                st. Makataeva 119 <br/>
                                                Saina street House number 52</p>
                                        </div>
                                        <div className="foodpage-avg-check">
                                            <p>Average check: 1.000-2.500 tg</p>
                                            <p>Cuisine: American</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="foodpage-menu">
                                <MenuTab />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

export default FoodPageTab;
