import React from "react";

const Trail = (props) => {
    return (
        <div className={"Trail" + props.id}>
            <img src={props.img}/> 
            <h3>{props.name}</h3>
            <p>{props.length}</p>
            <p>Location: {props.location}</p>
            <button><a href={props.link}>View Map</a></button>
        </div>
        )
}
export default Trail;
            