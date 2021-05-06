import React, { Component } from "react";
import Row from "../components/Row";
import Card from "../components/Card";
import Project from "../utils/data.json"

// photo, title, description, githubBtn, deployBtn
class Portfolio extends Component {
    state = {
        result: Project
    };





    render() {
        console.log(this.state.result)
        return (
            <>
                <h1>My Portfolio</h1>
                <Row />

                {(this.state.result).map((project) =>
                    <Card
                        photo={project.photo}
                        title={project.title}
                        description={project.description}
                        githubBtn={project.githubBtn}
                        deployBtn={project.deployBtn}
                    />
                )}


            </>
        )
    }

}

export default Portfolio;