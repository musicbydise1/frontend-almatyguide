import React, {Component} from 'react';
import EntertainmentTab from "../Components/Entertainments/EntertainmentTab";
import Footer from "../Components/Footer";

class Entertainment extends Component {
    render() {
        return (
            <div>
                <EntertainmentTab />
                <Footer />
            </div>
        );
    }
}

export default Entertainment;
