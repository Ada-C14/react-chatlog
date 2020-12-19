import React from 'react';
import Timestamp from './Timestamp';
import './ChatEntry.css';

const ChatEntry = (props) => {
    return (
        <article className = "chat-entry local">
            <h2 className = "entry-name"> {props.sender} </h2>
            <p className = "entry-bubble">{props.body} <br/>
                <Timestamp time = {props.timeStamp} />
            </p>
            
        </article>
    );
};

export default ChatEntry;