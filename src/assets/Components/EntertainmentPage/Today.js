import React, {Component} from 'react';
import BlackAdam from "./BlackAdam";
import Wakanda from "./Wakanda";
import Lyle from "./Lyle";

class Today extends Component {
    render() {
        return (
            <div>
                <div className="afisha-boxes">
                   <BlackAdam />
                    <Wakanda />
                    <Lyle />
                </div>
            </div>
        );
    }
}

export default Today;
