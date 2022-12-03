import React, {Component} from 'react';
import Footer from "../Components/Footer";
import EntertainmentPageTab from "../Components/EntertainmentPage/EntertainmentPageTab";

class EntertainmentPage extends Component {
    render() {
        return (
            <div>
                <EntertainmentPageTab />
                <Footer />
            </div>
        );
    }
}

export default EntertainmentPage;
