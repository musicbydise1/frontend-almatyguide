import React, {Component} from 'react';

class RestaurantScheme extends Component {
    render() {
        return (
            <div>
                <div className="scheme-title">
                    <h1>Scheme of the restaurant</h1>
                </div>
                <div className="scheme">
                    <div className="scheme-main">
                        <div className="scheme-block toilet">
                            <p>toilet</p>
                        </div>
                        <div className="scheme-block bar">
                            <p>bar</p>
                        </div>
                        <div className="scheme-block first">
                            <div className="table"></div>
                            <div className="chair one-chair"></div>
                            <div className="chair two-chair"></div>
                            <div className="chair three-chair"></div>
                            <div className="chair four-chair"></div>
                            <div className="chair five-chair"></div>
                            <div className="chair six-chair"></div>
                            <div className="chair seven-chair"></div>
                            <div className="chair eight-chair"></div>
                            <div className="chair nine-chair"></div>
                            <div className="chair ten-chair"></div>
                        </div>
                        <div className="scheme-block second">
                            <div className="table"></div>
                            <div className="chair one-chair"></div>
                            <div className="chair two-chair"></div>
                            <div className="chair three-chair"></div>
                            <div className="chair four-chair"></div>
                        </div>
                        <div className="scheme-block third">
                            <div className="table"></div>
                            <div className="chair one-chair"></div>
                            <div className="chair two-chair"></div>
                            <div className="chair three-chair"></div>
                            <div className="chair four-chair"></div>
                            <div className="chair five-chair"></div>
                            <div className="chair six-chair"></div>
                            <div className="chair seven-chair"></div>
                            <div className="chair eight-chair"></div>
                            <div className="chair nine-chair"></div>
                            <div className="chair ten-chair"></div>
                        </div>
                        <div className="scheme-block fourth">
                            <div className="table"></div>
                            <div className="chair one-chair"></div>
                            <div className="chair two-chair"></div>
                            <div className="chair three-chair"></div>
                            <div className="chair four-chair"></div>
                            <div className="chair five-chair"></div>
                            <div className="chair six-chair"></div>
                        </div>
                        <div className="scheme-block door">
                            <p>door</p>
                        </div>
                        <div className="scheme-block fifth">
                            <div className="table"></div>
                            <div className="chair one-chair"></div>
                            <div className="chair two-chair"></div>
                            <div className="chair three-chair"></div>
                            <div className="chair four-chair"></div>
                            <div className="sofa"></div>
                        </div>
                    </div>
                    <div className="res-btn">
                        <button>Reserve table</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default RestaurantScheme;
