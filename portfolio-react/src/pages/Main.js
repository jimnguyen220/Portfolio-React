import React from "react";
import Row from "../components/Row"
import Jumbotron from "../components/Jumbotron"

function Main() {
    return (
        <>
            <Row />
            <Jumbotron>
            <div className="col-md-4 col-lg-4">
                <img src="./assets/myPhoto.jpg"></img>
            </div>
            <div className="col-sm-12 col-md-8 col-lg-8 bg-secondary">
                <h2>Hello World!</h2>
                <p>
                    My name is Jim Nguyen and I am a full stack web development student at the University of MN's coding
                    bootcamp. I am proficient in JavaScript, JSON, Node.js, SQL and am just starting to learn MongoDB. I find
                    myself gravitating towards working with back-end code but also enjoy watching things come together with
                    using different technologies on the front end.
                </p>
                <p>
                    My Portfolio page has a few examples of some of the projects we have worked on so far. You will be able to
                    link to the github repo of that project and view it in action by clicking on the adjacent link. Feel free
                    to browse them and get in contact if you have any questions.
                </p>
                <p>
                    I have also included a few links in the Nav Bar above to my LinkedIn profile, Github repo and a downloadable link of my resume.  If you have any additional questions, I can be contacted at jimnguyen220@gmail.com or on text/phone at 651-252-4113.
                </p>
            </div>
            </Jumbotron>




        </>
    )
}

export default Main;