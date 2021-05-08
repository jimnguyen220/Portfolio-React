import React from "react";
import Row from "../components/Row"


function Main() {
    return (
        <>
            <Row />

            <div className="col-md-4 col-lg-4">
                <img src={process.env.PUBLIC_URL + '/assets/myPhoto.png'} alt="myPhoto"></img>
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
                    I have also included a few links under the 'Contact Me' page.  You will find links to my Github, 
                    LinkedIn and a downloadable link of my resume. If you have any additional questions, you will also find
                    my contact information there as well.
                </p>
            </div>

        </>
    )
}

export default Main;