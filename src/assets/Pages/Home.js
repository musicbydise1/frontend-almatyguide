import React, {Component} from 'react';
import {Container} from "@mui/material";
import button_arrow from "../img/btn_arrow.png"
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from "@ap.cx/react-fullpage";
import bgf from "../img/1.jpg"
import bgs from "../img/2.jpg"
import bgt from "../img/3.jpg"
import bgfo from "../img/4.jpg"
import bgfi from "../img/5.jpg"
import "../Styles/Page.scss"




class Home extends Component {
    render() {
        const SectionStyle = {
            height: '100vh',
            width: '100%',
        }
        return (
            <Fullpage>
                <FullpageNavigation  style ={{right: '10%', top: '15%'}} />
                <FullPageSections>
                    <FullpageSection style = {{...SectionStyle, backgroundImage: `url(${bgf})`, backgroundSize: 'cover'}}>
                        <div className="home-section">
                            <Container>
                                <div className="home-text">
                                    <h2>
                                        <span>Almaty</span> is the major <span>cultural centre</span> of Kazakhstan and its most populous and cosmopolitan city.
                                    </h2>
                                </div>
                                <div className="home-btn">
                                    <a className="btn btn--svg js-animated-button" href="#project"><span
                                        className="btn--svg__label">Go to food <img src={button_arrow} alt=""   /></span>
                                        <svg className="btn--svg__border" x="0px" y="0px" preserveAspectRatio="none"
                                             viewBox="2 29.3 56.9 13.4" enable-background="new 2 29.3 56.9 13.4" width="300">
                                            <g className="btn--svg__border--left js-discover-left-border" id="Calque_2">
                                                <path fill="none" stroke="#FFF" stroke-width="0.5" stroke-miterlimit="1"
                                                      d="M30.4,41.9H9c0,0-6.2-0.3-6.2-5.9S9,30.1,9,30.1h21.4"></path>
                                            </g>
                                            <g className="btn--svg__border--right js-discover-right-border" id="Calque_3">
                                                <path fill="none" stroke="#FFF" stroke-width="0.5" stroke-miterlimit="1"
                                                      d="M30.4,41.9h21.5c0,0,6.1-0.4,6.1-5.9s-6-5.9-6-5.9H30.4"></path>
                                            </g>
                                        </svg>
                                        <svg className="btn--svg__circle" width="300" x="0px" y="0px" viewBox="0 0 60 60"
                                             enable-background="new 0 0 60 60">
                                            <circle className="js-discover-circle" fill="#FFFFFF" cx="30" cy="30" r="28.7"></circle>
                                        </svg>
                                    </a>
                                </div>
                                <div className="facts">
                                    <div className="facts-blur">
                                        <div className="facts-boxes">
                                            <div className="fact-box">
                                                <p>Almaty is a sunny city. The weather pleases residents with sunny days, there are 238 of them a year, cloudy days - 86, and cloudy days - 42. The sunniest months of the year are July and September.</p>
                                            </div>
                                            <div className="fact-box">
                                                <p>90% of the services provided by the akimat can be obtained online today. Every second It-specialist of Kazakhstan lives in Almaty and almost 95% of citizens use online services.</p>
                                            </div>
                                            <div className="fact-box">
                                                <p>The highest mountain skating rink in the world is located in Almaty and this is Medeo. The skating rink is located at an altitude of 1691 meters above sea level. The area of the artificial ice field is 10,500 square meters.</p>
                                            </div>
                                            <div className="fact-box">
                                                <p>The highest mountain TV tower is located in Almaty on Mount Kok-Tobe. If you count from sea level, then this is the tallest television tower in the world.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Container>
                        </div>
                        </FullpageSection>
                    <FullpageSection style = {{...SectionStyle, backgroundImage: `url(${bgs})`, backgroundSize: 'cover'}}>
                        <div className="home-section">
                            <Container>
                                <div className="home-text">
                                    <h2>
                                        <span>Almaty</span> is the major <span>cultural centre</span> of Kazakhstan and its most populous and cosmopolitan city.
                                    </h2>
                                </div>
                                <div className="home-btn">
                                    <a className="btn btn--svg js-animated-button" href="#project"><span
                                        className="btn--svg__label">Go to food <img src={button_arrow} alt=""   /></span>
                                        <svg className="btn--svg__circle" width="300" x="0px" y="0px" viewBox="0 0 60 60"
                                             enable-background="new 0 0 60 60">
                                            <circle className="js-discover-circle" fill="#FFFFFF" cx="30" cy="30" r="28.7"></circle>
                                        </svg>
                                        <svg className="btn--svg__border" x="0px" y="0px" preserveAspectRatio="none"
                                             viewBox="2 29.3 56.9 13.4" enable-background="new 2 29.3 56.9 13.4" width="300">
                                            <g className="btn--svg__border--left js-discover-left-border" id="Calque_2">
                                                <path fill="none" stroke="#FFF" stroke-width="0.5" stroke-miterlimit="1"
                                                      d="M30.4,41.9H9c0,0-6.2-0.3-6.2-5.9S9,30.1,9,30.1h21.4"></path>
                                            </g>
                                            <g className="btn--svg__border--right js-discover-right-border" id="Calque_3">
                                                <path fill="none" stroke="#FFF" stroke-width="0.5" stroke-miterlimit="1"
                                                      d="M30.4,41.9h21.5c0,0,6.1-0.4,6.1-5.9s-6-5.9-6-5.9H30.4"></path>
                                            </g>
                                        </svg>
                                    </a>
                                </div>
                                <div className="facts">
                                    <div className="facts-boxes">
                                        <div className="fact-box">
                                            <p>Almaty is a sunny city. The weather pleases residents with sunny days, there are 238 of them a year, cloudy days - 86, and cloudy days - 42. The sunniest months of the year are July and September.</p>
                                        </div>
                                        <div className="fact-box">
                                            <p>90% of the services provided by the akimat can be obtained online today. Every second It-specialist of Kazakhstan lives in Almaty and almost 95% of citizens use online services.</p>
                                        </div>
                                        <div className="fact-box">
                                            <p>The highest mountain skating rink in the world is located in Almaty and this is Medeo. The skating rink is located at an altitude of 1691 meters above sea level. The area of the artificial ice field is 10,500 square meters.</p>
                                        </div>
                                        <div className="fact-box">
                                            <p>The highest mountain TV tower is located in Almaty on Mount Kok-Tobe. If you count from sea level, then this is the tallest television tower in the world.</p>
                                        </div>
                                    </div>
                                </div>
                            </Container>
                        </div>
                    </FullpageSection>
                    <FullpageSection style = {{...SectionStyle, backgroundImage: `url(${bgt})`, backgroundSize: 'cover'}}>
                        <div className="home-section">
                            <Container>
                                <div className="home-text">
                                    <h2>
                                        <span>Almaty</span> is the major <span>cultural centre</span> of Kazakhstan and its most populous and cosmopolitan city.
                                    </h2>
                                </div>
                                <div className="home-btn">
                                    <a className="btn btn--svg js-animated-button" href="#project"><span
                                        className="btn--svg__label">Go to food <img src={button_arrow} alt=""   /></span>
                                        <svg className="btn--svg__circle" width="300" x="0px" y="0px" viewBox="0 0 60 60"
                                             enable-background="new 0 0 60 60">
                                            <circle className="js-discover-circle" fill="#FFFFFF" cx="30" cy="30" r="28.7"></circle>
                                        </svg>
                                        <svg className="btn--svg__border" x="0px" y="0px" preserveAspectRatio="none"
                                             viewBox="2 29.3 56.9 13.4" enable-background="new 2 29.3 56.9 13.4" width="300">
                                            <g className="btn--svg__border--left js-discover-left-border" id="Calque_2">
                                                <path fill="none" stroke="#FFF" stroke-width="0.5" stroke-miterlimit="1"
                                                      d="M30.4,41.9H9c0,0-6.2-0.3-6.2-5.9S9,30.1,9,30.1h21.4"></path>
                                            </g>
                                            <g className="btn--svg__border--right js-discover-right-border" id="Calque_3">
                                                <path fill="none" stroke="#FFF" stroke-width="0.5" stroke-miterlimit="1"
                                                      d="M30.4,41.9h21.5c0,0,6.1-0.4,6.1-5.9s-6-5.9-6-5.9H30.4"></path>
                                            </g>
                                        </svg>
                                    </a>
                                </div>
                                <div className="facts">
                                    <div className="facts-blur"></div>
                                    <div className="facts-boxes">
                                        <div className="fact-box">
                                            <p>Almaty is a sunny city. The weather pleases residents with sunny days, there are 238 of them a year, cloudy days - 86, and cloudy days - 42. The sunniest months of the year are July and September.</p>
                                        </div>
                                        <div className="fact-box">
                                            <p>90% of the services provided by the akimat can be obtained online today. Every second It-specialist of Kazakhstan lives in Almaty and almost 95% of citizens use online services.</p>
                                        </div>
                                        <div className="fact-box">
                                            <p>The highest mountain skating rink in the world is located in Almaty and this is Medeo. The skating rink is located at an altitude of 1691 meters above sea level. The area of the artificial ice field is 10,500 square meters.</p>
                                        </div>
                                        <div className="fact-box">
                                            <p>The highest mountain TV tower is located in Almaty on Mount Kok-Tobe. If you count from sea level, then this is the tallest television tower in the world.</p>
                                        </div>
                                    </div>
                                </div>
                            </Container>
                        </div>
                    </FullpageSection>
                    <FullpageSection style = {{...SectionStyle, backgroundImage: `url(${bgfo})`, backgroundSize: 'cover'}}>
                        <div className="home-section">
                            <Container>
                                <div className="home-text">
                                    <h2>
                                        <span>Almaty</span> is the major <span>cultural centre</span> of Kazakhstan and its most populous and cosmopolitan city.
                                    </h2>
                                </div>
                                <div className="home-btn">
                                    <a className="btn btn--svg js-animated-button" href="#project"><span
                                        className="btn--svg__label">Go to food <img src={button_arrow} alt=""   /></span>
                                        <svg className="btn--svg__circle" width="300" x="0px" y="0px" viewBox="0 0 60 60"
                                             enable-background="new 0 0 60 60">
                                            <circle className="js-discover-circle" fill="#FFFFFF" cx="30" cy="30" r="28.7"></circle>
                                        </svg>
                                        <svg className="btn--svg__border" x="0px" y="0px" preserveAspectRatio="none"
                                             viewBox="2 29.3 56.9 13.4" enable-background="new 2 29.3 56.9 13.4" width="300">
                                            <g className="btn--svg__border--left js-discover-left-border" id="Calque_2">
                                                <path fill="none" stroke="#FFF" stroke-width="0.5" stroke-miterlimit="1"
                                                      d="M30.4,41.9H9c0,0-6.2-0.3-6.2-5.9S9,30.1,9,30.1h21.4"></path>
                                            </g>
                                            <g className="btn--svg__border--right js-discover-right-border" id="Calque_3">
                                                <path fill="none" stroke="#FFF" stroke-width="0.5" stroke-miterlimit="1"
                                                      d="M30.4,41.9h21.5c0,0,6.1-0.4,6.1-5.9s-6-5.9-6-5.9H30.4"></path>
                                            </g>
                                        </svg>
                                    </a>
                                </div>
                                <div className="facts">
                                    <div className="facts-blur"></div>
                                    <div className="facts-boxes">
                                        <div className="fact-box">
                                            <p>Almaty is a sunny city. The weather pleases residents with sunny days, there are 238 of them a year, cloudy days - 86, and cloudy days - 42. The sunniest months of the year are July and September.</p>
                                        </div>
                                        <div className="fact-box">
                                            <p>90% of the services provided by the akimat can be obtained online today. Every second It-specialist of Kazakhstan lives in Almaty and almost 95% of citizens use online services.</p>
                                        </div>
                                        <div className="fact-box">
                                            <p>The highest mountain skating rink in the world is located in Almaty and this is Medeo. The skating rink is located at an altitude of 1691 meters above sea level. The area of the artificial ice field is 10,500 square meters.</p>
                                        </div>
                                        <div className="fact-box">
                                            <p>The highest mountain TV tower is located in Almaty on Mount Kok-Tobe. If you count from sea level, then this is the tallest television tower in the world.</p>
                                        </div>
                                    </div>
                                </div>
                            </Container>
                        </div>
                    </FullpageSection>
                    <FullpageSection style = {{...SectionStyle, backgroundImage: `url(${bgfi})`, backgroundSize: 'cover'}}>
                        <div className="home-section">
                            <Container>
                                <div className="home-text">
                                    <h2>
                                        <span>Almaty</span> is the major <span>cultural centre</span> of Kazakhstan and its most populous and cosmopolitan city.
                                    </h2>
                                </div>
                                <div className="home-btn">
                                    <a className="btn btn--svg js-animated-button" href="#project"><span
                                        className="btn--svg__label">Go to food <img src={button_arrow} alt=""   /></span>
                                        <svg className="btn--svg__circle" width="300" x="0px" y="0px" viewBox="0 0 60 60"
                                             enable-background="new 0 0 60 60">
                                            <circle className="js-discover-circle" fill="#FFFFFF" cx="30" cy="30" r="28.7"></circle>
                                        </svg>
                                        <svg className="btn--svg__border" x="0px" y="0px" preserveAspectRatio="none"
                                             viewBox="2 29.3 56.9 13.4" enable-background="new 2 29.3 56.9 13.4" width="300">
                                            <g className="btn--svg__border--left js-discover-left-border" id="Calque_2">
                                                <path fill="none" stroke="#FFF" stroke-width="0.5" stroke-miterlimit="1"
                                                      d="M30.4,41.9H9c0,0-6.2-0.3-6.2-5.9S9,30.1,9,30.1h21.4"></path>
                                            </g>
                                            <g className="btn--svg__border--right js-discover-right-border" id="Calque_3">
                                                <path fill="none" stroke="#FFF" stroke-width="0.5" stroke-miterlimit="1"
                                                      d="M30.4,41.9h21.5c0,0,6.1-0.4,6.1-5.9s-6-5.9-6-5.9H30.4"></path>
                                            </g>
                                        </svg>
                                    </a>
                                </div>
                                <div className="facts">
                                    <div className="facts-blur"></div>
                                    <div className="facts-boxes">
                                        <div className="fact-box">
                                            <p>Almaty is a sunny city. The weather pleases residents with sunny days, there are 238 of them a year, cloudy days - 86, and cloudy days - 42. The sunniest months of the year are July and September.</p>
                                        </div>
                                        <div className="fact-box">
                                            <p>90% of the services provided by the akimat can be obtained online today. Every second It-specialist of Kazakhstan lives in Almaty and almost 95% of citizens use online services.</p>
                                        </div>
                                        <div className="fact-box">
                                            <p>The highest mountain skating rink in the world is located in Almaty and this is Medeo. The skating rink is located at an altitude of 1691 meters above sea level. The area of the artificial ice field is 10,500 square meters.</p>
                                        </div>
                                        <div className="fact-box">
                                            <p>The highest mountain TV tower is located in Almaty on Mount Kok-Tobe. If you count from sea level, then this is the tallest television tower in the world.</p>
                                        </div>
                                    </div>
                                </div>
                            </Container>
                        </div>
                    </FullpageSection>
                </FullPageSections>
            </Fullpage>
        );
    }
}

export default Home;
