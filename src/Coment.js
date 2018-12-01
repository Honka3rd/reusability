import React from 'react';

const Comment = props=>
{
    return(
        <div className="content">
            <a href="/" className="right floated mini ui image">
                <img alt="avatar" src={props.img}/>
            </a>
            <a href="/" className="header">
                {props.name}
            </a>
            <div className="meta">
                <span className="date">Today at {props.time}</span>
            </div>
            <div className="description">{props.content}</div>
        </div>
    );
}

export default Comment;