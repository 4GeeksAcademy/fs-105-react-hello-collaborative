import React from "react";
import "../../styles/Jumbotron.css";

export const Jumbotron =()=>{
    return(
        <div className="card card-light bg-light" id="Jumbotron">
            <h1 id="h1-jumbotron">A Warm Welcome!</h1>
            <p id="p-Jumbotron">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <button className="btn btn-primary" id="button-Jumbotron">Call to action!</button>
        </div>
    )
}