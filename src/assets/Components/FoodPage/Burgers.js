import React, {Component} from 'react';
import wopper from "../../img/wopper.png"
import wopperjr from "../../img/wopperjunior.png"
import bigking from "../../img/bigking.png"
import steakhouse from "../../img/steakhouse.png"
import cheeseburger from "../../img/cheeseburger.png"
import krispychicken from "../../img/krispychicken.png"
import doublekrispychicken from "../../img/doublekrispychicken.png"
import longchicken from "../../img/longchicken.png"
import villagechicken from "../../img/longchicken.png"
import naggetsburger from "../../img/naggetsburger.png"
import {useState} from "react";

class Burgers extends Component {
    render() {

        return (
            <div>
                <div className="foodpage-boxes">
                    <div className="foodpage-box">
                        <div className="foodpage-box-img">
                            <img src={wopper} alt=""/>
                        </div>
                        <div className="foodpage-box-text">
                            <div className="foodpage-box-title">
                                <p>Wopper</p>
                            </div>
                            <div className="foodpage-box-cost">
                                <p>2.100 tg</p>
                            </div>
                        </div>
                        <div className="foodpage-box-btn">
                            <div className="minus">
                                <button>-</button>
                            </div>
                            <div className="count">
                                <span>0</span>
                            </div>
                            <div className="plus">
                                <button>+</button>
                            </div>

                        </div>
                    </div>


                    <div className="foodpage-box">
                        <div className="foodpage-box-img">
                            <img src={wopperjr} alt=""/>
                        </div>
                        <div className="foodpage-box-text">
                            <div className="foodpage-box-title">
                                <p>Wopper Junior</p>
                            </div>
                            <div className="foodpage-box-cost">
                                <p>2.500 tg</p>
                            </div>
                        </div>
                        <div className="foodpage-box-btn">
                            <div className="minus">
                                <button>-</button>
                            </div>
                            <div className="count">
                                <span>0</span>
                            </div>
                            <div className="plus">
                                <button>+</button>
                            </div>

                        </div>
                    </div>


                    <div className="foodpage-box">
                        <div className="foodpage-box-img">
                            <img src={bigking} alt=""/>
                        </div>
                        <div className="foodpage-box-text">
                            <div className="foodpage-box-title">
                                <p>Big King</p>
                            </div>
                            <div className="foodpage-box-cost">
                                <p>2.200 tg</p>
                            </div>
                        </div>
                        <div className="foodpage-box-btn">
                            <div className="minus">
                                <button>-</button>
                            </div>
                            <div className="count">
                                <span>0</span>
                            </div>
                            <div className="plus">
                                <button>+</button>
                            </div>

                        </div>
                    </div>


                    <div className="foodpage-box">
                        <div className="foodpage-box-img">
                            <img src={steakhouse} alt=""/>
                        </div>
                        <div className="foodpage-box-text">
                            <div className="foodpage-box-title">
                                <p>Steakhouse</p>
                            </div>
                            <div className="foodpage-box-cost">
                                <p>1.900 tg</p>
                            </div>
                        </div>
                        <div className="foodpage-box-btn">
                            <div className="minus">
                                <button>-</button>
                            </div>
                            <div className="count">
                                <span>0</span>
                            </div>
                            <div className="plus">
                                <button>+</button>
                            </div>

                        </div>
                    </div>


                    <div className="foodpage-box">
                        <div className="foodpage-box-img">
                            <img src={villagechicken} alt=""/>
                        </div>
                        <div className="foodpage-box-text">
                            <div className="foodpage-box-title">
                                <p>Village Chicken</p>
                            </div>
                            <div className="foodpage-box-cost">
                                <p>2.000 tg</p>
                            </div>
                        </div>
                        <div className="foodpage-box-btn">
                            <div className="minus">
                                <button>-</button>
                            </div>
                            <div className="count">
                                <span>0</span>
                            </div>
                            <div className="plus">
                                <button>+</button>
                            </div>

                        </div>
                    </div>


                    <div className="foodpage-box">
                        <div className="foodpage-box-img">
                            <img src={cheeseburger} alt=""/>
                        </div>
                        <div className="foodpage-box-text">
                            <div className="foodpage-box-title">
                                <p>Cheeseburger</p>
                            </div>
                            <div className="foodpage-box-cost">
                                <p>2.400 tg</p>
                            </div>
                        </div>
                        <div className="foodpage-box-btn">
                            <div className="minus">
                                <button>-</button>
                            </div>
                            <div className="count">
                                <span>0</span>
                            </div>
                            <div className="plus">
                                <button>+</button>
                            </div>

                        </div>
                    </div>

                    <div className="foodpage-box">
                        <div className="foodpage-box-img">
                            <img src={krispychicken} alt=""/>
                        </div>
                        <div className="foodpage-box-text">
                            <div className="foodpage-box-title">
                                <p>Krispy Chicken</p>
                            </div>
                            <div className="foodpage-box-cost">
                                <p>2.000 tg</p>
                            </div>
                        </div>
                        <div className="foodpage-box-btn">
                            <div className="minus">
                                <button>-</button>
                            </div>
                            <div className="count">
                                <span>0</span>
                            </div>
                            <div className="plus">
                                <button>+</button>
                            </div>

                        </div>
                    </div>

                    <div className="foodpage-box">
                        <div className="foodpage-box-img">
                            <img src={doublekrispychicken} alt=""/>
                        </div>
                        <div className="foodpage-box-text">
                            <div className="foodpage-box-title">
                                <p>Double Crispy Chicken</p>
                            </div>
                            <div className="foodpage-box-cost">
                                <p>2.100 tg</p>
                            </div>
                        </div>
                        <div className="foodpage-box-btn">
                            <div className="minus">
                                <button>-</button>
                            </div>
                            <div className="count">
                                <span>0</span>
                            </div>
                            <div className="plus">
                                <button>+</button>
                            </div>

                        </div>
                    </div>

                    <div className="foodpage-box">
                        <div className="foodpage-box-img">
                            <img src={longchicken} alt=""/>
                        </div>
                        <div className="foodpage-box-text">
                            <div className="foodpage-box-title">
                                <p>Long Chicken</p>
                            </div>
                            <div className="foodpage-box-cost">
                                <p>2.100 tg</p>
                            </div>
                        </div>
                        <div className="foodpage-box-btn">
                            <div className="minus">
                                <button>-</button>
                            </div>
                            <div className="count">
                                <span>0</span>
                            </div>
                            <div className="plus">
                                <button>+</button>
                            </div>

                        </div>
                    </div>

                    <div className="foodpage-box">
                        <div className="foodpage-box-img">
                            <img src={naggetsburger} alt=""/>
                        </div>
                        <div className="foodpage-box-text">
                            <div className="foodpage-box-title">
                                <p>Naggets Burger</p>
                            </div>
                            <div className="foodpage-box-cost">
                                <p>2.100 tg</p>
                            </div>
                        </div>
                        <div className="foodpage-box-btn">
                            <div className="minus">
                                <button>-</button>
                            </div>
                            <div className="count">
                                <span>0</span>
                            </div>
                            <div className="plus">
                                <button>+</button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Burgers;
