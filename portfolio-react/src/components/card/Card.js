import React from "react";
import "./style.css";

function Card({photo, title, description, githubBtn, deployBtn}) {
    return(
        <div className="col-sm-12 col-md-6 col-lg-6 card project">
            <img className="card-img-top" src={photo} alt={title}></img>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={githubBtn} className="btn btn-primary btn-lg">Github</a>
                <a href={deployBtn} className="btn btn-primary btn-lg">{title}</a>
            </div>
        </div>
    )
}

export default Card;