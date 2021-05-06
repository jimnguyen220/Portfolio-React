import React from "react";

function Card({photo, title, description, githubBtn, deployBtn}) {
    return(
        <div className="col-sm-12 col-md-6 col-lg-6 card">
            <img className="card-img-top" src={photo}></img>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={githubBtn} className="btn btn-primary">Github Repo</a>
                <a href={deployBtn} className="btn btn-primary">{title}</a>
            </div>
        </div>
    )
}

export default Card;