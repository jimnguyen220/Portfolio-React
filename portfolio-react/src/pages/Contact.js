import React from "react";
import Jumbotron from "../components/Jumbotron";


function Contact() {
    return (
        <Jumbotron>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Jim Nguyen</h5>
                    <h6 className="card-subtitle mb-2 text-muted">651-252-4113</h6>
                    <h6 className="card-subtitle mb-2 text-muted">jimnguyen220@gmail.com</h6>
                    <a href="https://github.com/jimnguyen220" className="card-link">Github</a>
                    <a href="https://www.linkedin.com/in/jim-nguyen-mn" className="card-link">LinkedIn</a>
                    <a href="./assets/Resume21121.pdf" className="card-link" download="resume">Downloadable Resume</a>
                </div>
            </div>
        </Jumbotron>

    )
}

export default Contact;