import React, {Component} from 'react';
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

import Canteens from "./Canteens";
import Restaurants from "./Restaurants";
import CoffeeHouse from "./CoffeeHouse";
import FoodDelivery from "./FoodDelivery";
import SteakHouse from "./SteakHouse";
import Bars from "./Bars";
import FastFood from "./FastFood";
import {Container} from "@mui/material";


class FoodTab extends Component {
    render() {
        return (
            <Container>
            <div className="food-tabs">
                <Tabs
                    defaultActiveKey="fastfood"
                    id="uncontrolled-tab-example"
                    className =" tabss"
                >
                    <Tab eventKey="fastfood" title="Fast food">
                        <FastFood />
                    </Tab>


                    <Tab eventKey="restaurants" title="Restaurants">
                        <Restaurants />
                    </Tab>
                    <Tab eventKey="canteens" title="Canteens" className="foot-tab">
                        <Canteens />
                    </Tab>
                    <Tab eventKey="coffeehouses" title="Coffee houses">
                        <CoffeeHouse />
                    </Tab>
                    <Tab eventKey="fooddelivery" title="Food delivery">
                        <FoodDelivery />
                    </Tab>

                    <Tab eventKey="steakhouses" title="Steak houses">
                        <SteakHouse />
                    </Tab>

                    <Tab eventKey="bars" title="Bars/pubs">
                        <Bars />
                    </Tab>
                </Tabs>
            </div>
            </Container>
        );
    }
}

export default FoodTab;
