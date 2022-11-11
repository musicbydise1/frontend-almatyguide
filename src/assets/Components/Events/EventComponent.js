import React, {Component} from 'react';
import event_1 from  '../../img/digital.png'
import event_2 from  '../../img/event_2.png'
import event_3 from  '../../img/event_3.png'
import {Container} from "@mui/material";

class EventComponent extends Component {
    render() {
        return (
            <div>
                <Container>
                    <h2>The main events of the week in Almaty (November 7 - 13)</h2>
                <div className="blog-boxes">
                    <div className="blog-box">
                        <div className="blog-img">
                            <img src={event_1} alt=""/>
                        </div>
                        <div className="blog-text">
                            <h1>New Year's concert Almaty Symphony at La Boheme theater</h1>
                            <h3>18.12.2021, 19:00</h3>
                            <p>The long-awaited performance of the Almaty Symphony musical group with the New Year's repertoire at the La Boheme theater! Listeners are waiting for their favorite works that are able to immediately immerse everyone in the atmosphere of the upcoming holiday. Share with Almaty Symphony the magic of the New Year season on December 18 at the La Boheme theater.
                                Almaty Symphony Orchestra brings together talented musicians who are not afraid to experiment, opening new horizons and directions in their work. With the emergence...</p>
                            <div className="box-btn">
                               <button>More</button>
                            </div>
                        </div>
                    </div>

                    <div className="blog-box">
                        <div className="blog-img">
                            <img src={event_1} alt=""/>
                        </div>
                        <div className="blog-text">
                            <h1>New Year's concert Almaty Symphony at La Boheme theater</h1>
                            <h3>18.12.2021, 19:00</h3>
                            <p>The long-awaited performance of the Almaty Symphony musical group with the New Year's repertoire at the La Boheme theater! Listeners are waiting for their favorite works that are able to immediately immerse everyone in the atmosphere of the upcoming holiday. Share with Almaty Symphony the magic of the New Year season on December 18 at the La Boheme theater.
                                Almaty Symphony Orchestra brings together talented musicians who are not afraid to experiment, opening new horizons and directions in their work. With the emergence...</p>
                            <div className="box-btn">
                                <button>More</button>
                            </div>
                        </div>
                    </div>


                    <div className="blog-box">
                        <div className="blog-img">
                            <img src={event_1} alt=""/>
                        </div>
                        <div className="blog-text">
                            <h1>New Year's concert Almaty Symphony at La Boheme theater</h1>
                            <h3>18.12.2021, 19:00</h3>
                            <p>The long-awaited performance of the Almaty Symphony musical group with the New Year's repertoire at the La Boheme theater! Listeners are waiting for their favorite works that are able to immediately immerse everyone in the atmosphere of the upcoming holiday. Share with Almaty Symphony the magic of the New Year season on December 18 at the La Boheme theater.
                                Almaty Symphony Orchestra brings together talented musicians who are not afraid to experiment, opening new horizons and directions in their work. With the emergence...</p>
                            <div className="box-btn">
                                <button>More</button>
                            </div>
                        </div>
                    </div>




                </div>
                </Container>
            </div>
        );
    }
}

export default EventComponent;
