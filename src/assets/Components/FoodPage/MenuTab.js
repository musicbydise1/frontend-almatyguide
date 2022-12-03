import React, {Component} from 'react';
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "../../Styles/FoodPageTabStyle..css"
import Combo from "./Combo";
import Burgers from "./Burgers";

class MenuTab extends Component {
    render() {
        return (
            <div className="foodpage-menu-tabs">
                    <Tabs
                        defaultActiveKey="combo"
                        id="uncontrolled-tab-example"
                        className ="menu-tabs"
                    >
                        <Tab eventKey="combo" title="Combo" className="menu-tab">
                            <Combo />
                        </Tab>


                        <Tab eventKey="burgers" title="Burgers" className="menu-tab">
                            <Burgers />
                        </Tab>
                        <Tab eventKey="snacks" title="Snacks" className="menu-tab">
                        </Tab>
                        <Tab eventKey="snacks" title="Snacks" className="menu-tab">
                        </Tab>
                        <Tab eventKey="Drinks" title="Drinks" className="menu-tab">
                        </Tab>
                    </Tabs>
            </div>
        );
    }
}

export default MenuTab;
