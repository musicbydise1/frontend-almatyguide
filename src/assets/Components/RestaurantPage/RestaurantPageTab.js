import React, {Component} from 'react';
import {Container} from "@mui/material";
import item_img from "../../img/dijon-main.png";
import RestaurantScheme from "./RestaurantScheme";

class RestaurantPageTab extends Component {
    render() {
        return (
            <div>
                <Container>
                    <div className="food-tabs foodpage">
                        <div>
                            <ul id="foood">
                                <li><a href="/food">Fast food</a></li>
                                <li className="food-active"><a href="/food">Restaurants</a></li>
                                <li><a href="/food">Canteens</a></li>
                                <li><a href="/food">Coffee houses</a></li>
                                <li><a href="/food">Steakhouses</a></li>
                                <li><a href="/food">Bars/pubs</a></li>
                            </ul>
                        </div>
                        <div className="foodpage-items respage-items">
                            <div className="foodpage-item">
                                <div className="foodpage-item-img">
                                    <img src={item_img} alt=""/>
                                </div>
                                <div className="foodpage-item-description">
                                    <div className="respage-item-title">
                                        <h1>Dijon</h1>
                                    </div>
                                    <div className="respage-item-text">
                                       <p>
                                           Average check: 10.000-15.000 tenge <br />
                                           Cuisine: French <br />
                                           Parking: Unguarded free <br />
                                           Accepted for payment: Cash, Payment by card <br />
                                           Address: Almaty, Al-Farabi Ave., 140a/2 (MFC VILLA) <br />
                                           Opening hours: Mon-Sun 09:00–23:00 <br />
                                           Phone: +7 (700) 555-50-57 <br />
                                           Seats: 50 <br />
                                       </p>
                                    </div>
                                </div>
                            </div>
                            <div className="foodpage-menu respage-scheme">
                                <RestaurantScheme />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

export default RestaurantPageTab;
