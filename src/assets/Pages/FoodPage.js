import React, {Component, useState} from 'react';
import FoodPageTab from "../Components/FoodPage/FoodPageTab";
import Footer from "../Components/Footer";

class FoodPage extends Component {
    render() {
        return (
            <div>
                <FoodPageTab />
                <Footer />
            </div>
        );
    }
}

export default FoodPage;
