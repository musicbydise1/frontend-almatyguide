import React, {Component} from 'react';
import Footer from "../Components/Footer";
import RestaurantPageTab from "../Components/RestaurantPage/RestaurantPageTab";
import "../Styles/RestaurantPageStyle.css"

class RestaurantPage extends Component {
    render() {
        return (
            <div>
                <RestaurantPageTab />
                <Footer />
            </div>
        );
    }
}

export default RestaurantPage;
