import React, {Component} from 'react';
import EventComponent from "../Components/Events/EventComponent";
import Footer from "../Components/Footer";

class Events extends Component {
    render() {
        return (
            <div>
                <EventComponent />
                <Footer />
            </div>
        );
    }
}

export default Events;
