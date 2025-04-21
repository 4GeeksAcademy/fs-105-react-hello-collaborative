import React from "react"
import "../../styles/Card.css"


export const Card = () => {
    return (
        <div className="card" id="Card" >
            <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body text-center">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <button className="btn btn-primary">Find Out More!</button>
                </div>
        </div>
    )
}
