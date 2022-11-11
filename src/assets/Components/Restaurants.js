import React, {Component} from 'react';
import {Container} from "react-bootstrap";
import dijon from "../img/dijon.png";
import afanasich from '../img/afanasich.png'
import jambull from '../img/jambull.png'
import zags from '../img/zags.png'

class Restaurants extends Component {
    render() {
        return (
            <div>
                <Container>
                    <div className="food-boxes">
                        <div className="food-box">
                            <div className="box-img">
                                <a href="/dijon"> <img src={dijon} alt=""/></a>
                            </div>
                            <div className="box-text">
                                <h2>Dijon</h2>
                                <p>Average check: <span className="text-bold"> 10000-15000 tenge </span></p>
                                <p>Cuisine: <span className="text-bold"> French</span></p>
                                <div className="addresses">
                                    <p>Addresses:</p>
                                    <div className="text-bold">
                                        <p>Almaty, Al-Farabi ave., 140a/2 (MFC VILLA)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="food-box">
                            <div className="box-img">
                                <img src={afanasich} alt=""/>
                            </div>
                            <div className="box-text">
                                <h2>Afanasich</h2>
                                <p>Average check: <span className="text-bold"> 1000-2500 tenge </span></p>
                                <p>Cuisine: <span className="text-bold"> Asian, Chinese, Pan-Asian</span></p>
                                <div className="addresses">
                                    <p>Addresses:</p>
                                    <div className="text-bold">
                                        <p>Gogol, 87</p>
                                        <p>Rozybakiyeva, 136/1</p>
                                        <p>Tole bi, 55/1</p>
                                        <p> Zhibek Zholy avenue, 64</p>
                                        <p>Tole bi, 229/2 </p>
                                        <p>SEC Mega Center Alma-Ata Rozybakiyeva, 247a</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="food-box">
                            <div className="box-img">
                                <img src={jambull} alt=""/>
                            </div>
                            <div className="box-text">
                                <h2>JamBull</h2>
                                <p>Average check: <span className="text-bold"> 1000-2500 tenge </span></p>
                                <p>Cuisine: <span className="text-bold"> Asian, Chinese, Pan-Asian</span></p>
                                <div className="addresses">
                                    <p>Addresses:</p>
                                    <div className="text-bold">
                                        <p>Gogol, 87</p>
                                        <p>Rozybakiyeva, 136/1</p>
                                        <p>Tole bi, 55/1</p>
                                        <p> Zhibek Zholy avenue, 64</p>
                                        <p>Tole bi, 229/2 </p>
                                        <p>SEC Mega Center Alma-Ata Rozybakiyeva, 247a</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="food-box">
                            <div className="box-img">
                                <img src={zags} alt=""/>
                            </div>
                            <div className="box-text">
                                <h2>Zags</h2>
                                <p>Average check: <span className="text-bold"> 1000-2500 tenge </span></p>
                                <p>Cuisine: <span className="text-bold"> Asian, Chinese, Pan-Asian</span></p>
                                <div className="addresses">
                                    <p>Addresses:</p>
                                    <div className="text-bold">
                                        <p>Gogol, 87</p>
                                        <p>Rozybakiyeva, 136/1</p>
                                        <p>Tole bi, 55/1</p>
                                        <p> Zhibek Zholy avenue, 64</p>
                                        <p>Tole bi, 229/2 </p>
                                        <p>SEC Mega Center Alma-Ata Rozybakiyeva, 247a</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Restaurants;
