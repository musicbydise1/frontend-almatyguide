import React, {Component} from 'react';
import {Container} from "react-bootstrap";

class Reg extends Component {
    render() {
        return (
            <div>
                <Container>
                    <div className="Auth-form-container">
                        <form className="Auth-form">
                            <div className="Auth-form-content">
                                <h3 className="Auth-form-title">Registrate</h3>
                                <div className="form-group mt-3">
                                    <label>Name</label>
                                    <input
                                        type="name"
                                        className="form-control mt-1"
                                        placeholder="Enter name"
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <label>Email address</label>
                                    <input
                                        type="email"
                                        className="form-control mt-1"
                                        placeholder="Enter email"
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        className="form-control mt-1"
                                        placeholder="Enter password"
                                    />
                                </div>
                                <div className="d-grid gap-2 mt-3">
                                    <button type="submit" className="btn btn-primary">
                                        Submit
                                    </button>
                                </div>
                                <p className="forgot-password text-right mt-2">
                                    Already registered?<a href="/login"> Login</a>
                                </p>
                            </div>
                        </form>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Reg;
