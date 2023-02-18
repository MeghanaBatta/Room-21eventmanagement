import React from 'react'
import './style.css'
const EventType = (props) => {
    return (
        <div className="event-component">
            <div className="event-poster">
                <img classname="" width="190px" height="220px" src ={props.imageLink} />
            </div>
            <h2 className="event-name">{props.eventName}</h2>
            <div className="event-description">{props.description}</div>
        </div>
    )
}
export default EventType;