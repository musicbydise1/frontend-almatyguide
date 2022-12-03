import React, {Component} from 'react';
import FoodTab from "../Components/FoodTab";
import "../Styles/Pages.css";
import Footer from "../Components/Footer";

class Food extends Component {
    render() {
        return (
            <div>
                <FoodTab />
                <Footer />
            </div>
        );
    }
}

export default Food;
