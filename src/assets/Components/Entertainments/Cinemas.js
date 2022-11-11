import React, {Component} from 'react';
import {Container} from "react-bootstrap";
import chaplinmega from "../../img/chaplinmega.png"
import kinopark_11 from '../../img/kinopark11.png'
import cinemax from "../../img/cinemax.png"
import chaplinmegapark from "../../img/chaplinmegapark.png"
import kinopark16 from "../../img/kinopark16.png"
import cinematowers from "../../img/cinematowers.png"
import kinopark6 from "../../img/kinopark6.png"
import kinopark8 from "../../img/kinopark8.png"
import "../../Styles/tabsStyle.css"

class Cinemas extends Component {
    render() {
        return (
            <div>
                <Container>
                    <div className="food-boxes">
                        <div className="food-box entert">
                            <div className="box-img">
                                <a href="/reddragon"> <img src={chaplinmega} alt=""/></a>
                            </div>
                            <div className="box-text">
                                <div className="texts">
                                    <h2>Chaplin MEGA Alma-Ata</h2>
                                    <p>Al-Farabi Avenue, 77/8 Esentai Mall</p>
                                </div>

                            </div>
                            <div className="box-btn">
                                <button>Afisha</button>
                            </div>
                        </div>


                        <div className="food-box entert">
                            <div className="box-img">
                                <a href="/reddragon"> <img src={kinopark_11} alt=""/></a>
                            </div>
                            <div className="box-text">
                                <div className="texts">
                                    <h2>Kinopark 11 IMAX Esentai</h2>
                                    <p>Al-Farabi Avenue, 77/8 Esentai Mall</p>
                                </div>
                            </div>
                            <div className="box-btn">
                                <button>Afisha</button>
                            </div>
                        </div>

                        <div className="food-box entert">
                            <div className="box-img">
                                <a href="/reddragon"> <img src={cinemax} alt=""/></a>
                            </div>
                            <div className="box-text">
                                <div className="texts">
                                    <h2>Kinopark 11 IMAX Esentai</h2>
                                    <p>Al-Farabi Avenue, 77/8 Esentai Mall</p>
                                </div>
                            </div>
                            <div className="box-btn">
                                <button>Afisha</button>
                            </div>
                        </div>


                        <div className="food-box entert">
                            <div className="box-img">
                                <a href="/reddragon"> <img src={chaplinmegapark} alt=""/></a>
                            </div>
                            <div className="box-text">
                                <div className="texts">
                                    <h2>Kinopark 11 IMAX Esentai</h2>
                                    <p>Al-Farabi Avenue, 77/8 Esentai Mall</p>
                                </div>
                            </div>
                            <div className="box-btn">
                                <button>Afisha</button>
                            </div>
                        </div>

                        <div className="food-box entert">
                            <div className="box-img">
                                <a href="/reddragon"> <img src={kinopark16} alt=""/></a>
                            </div>
                            <div className="box-text">
                                <div className="texts">
                                    <h2>Kinopark 11 IMAX Esentai</h2>
                                    <p>Al-Farabi Avenue, 77/8 Esentai Mall</p>
                                </div>
                            </div>
                            <div className="box-btn">
                                <button>Afisha</button>
                            </div>
                        </div>


                        <div className="food-box entert">
                            <div className="box-img">
                                <a href="/reddragon"> <img src={cinematowers} alt=""/></a>
                            </div>
                            <div className="box-text">
                                <div className="texts">
                                    <h2>Kinopark 11 IMAX Esentai</h2>
                                    <p>Al-Farabi Avenue, 77/8 Esentai Mall</p>
                                </div>
                            </div>
                            <div className="box-btn">
                                <button>Afisha</button>
                            </div>
                        </div>

                        <div className="food-box entert">
                            <div className="box-img">
                                <a href="/reddragon"> <img src={kinopark6} alt=""/></a>
                            </div>
                            <div className="box-text">
                                <div className="texts">
                                    <h2>Kinopark 11 IMAX Esentai</h2>
                                    <p>Al-Farabi Avenue, 77/8 Esentai Mall</p>
                                </div>
                            </div>
                            <div className="box-btn">
                                <button>Afisha</button>
                            </div>
                        </div>

                        <div className="food-box entert">
                            <div className="box-img">
                                <a href="/reddragon"> <img src={kinopark8} alt=""/></a>
                            </div>
                            <div className="box-text">
                                <div className="texts">
                                    <h2>Kinopark 11 IMAX Esentai</h2>
                                    <p>Al-Farabi Avenue, 77/8 Esentai Mall</p>
                                </div>
                            </div>
                            <div className="box-btn">
                                <button>Afisha</button>
                            </div>
                        </div>




                    </div>
                </Container>
            </div>
        );
    }
}

export default Cinemas;
