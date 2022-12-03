import React, {Component} from 'react';
import {Container} from "@mui/material";
import BasketTab from "../Components/Basket/BasketTab";
import BasketItems from "../Components/Basket/BasketItems";
import BasketCost from "../Components/Basket/BasketCost";
import Footer from "../Components/Footer";

class Basket extends Component {
    render() {
        return (
            <div>
                <Container>
                <div id="basket">
                    <BasketTab />
                    <BasketCost />
                </div>

                </Container>
                <Footer />
            </div>
        );
    }
}

export default Basket;
