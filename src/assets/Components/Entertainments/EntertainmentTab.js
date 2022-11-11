import React, {Component} from 'react';
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import {Container} from "@mui/material";
import Theatres from "./Theatres";
import Cinemas from "./Cinemas"
import LivePerfomance from "./LivePerformances"
import FashionIndustry from "./FashionIndustry"
import ComedyClub from "./ComedyClub"

class EntertainmentTab extends Component {
    render() {
        return (
            <Container>
            <div className="food-tabs">

                    <Tabs
                        defaultActiveKey="cinemas"
                        id="uncontrolled-tab-example"
                        className =" tabss"
                    >
                        <Tab eventKey="cinemas" title="Cinemas">
                            <Cinemas />
                        </Tab>
                        <Tab eventKey="theatres" title="Theatres" className="foot-tab">
                            <Theatres />
                        </Tab>
                        <Tab eventKey="lifeperfomance" title="Live performances">
                            <LivePerfomance />
                        </Tab>
                        <Tab eventKey="fashionindustry" title="Fashion industry">
                            <FashionIndustry />
                        </Tab>

                        <Tab eventKey="comedyclub" title="Comedy club">
                            <ComedyClub />
                        </Tab>



                    </Tabs>

            </div>
            </Container>
        );
    }
}

export default EntertainmentTab;
