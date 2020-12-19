import React from 'react';
import Timestamp from './Timestamp';
import './ChatEntry.css';

const ChatEntry = (props) => {
    const status = props.sender === props.localUser ? 'local' : 'remote';

    return (
        <article className = {`chat-entry ${status}`}>
            <h2 className = "entry-name"> {props.sender} </h2>
            <p className = "entry-bubble">{props.body} <br/>
                <Timestamp time = {props.timeStamp} />
            </p>
            
        </article>
    );
};

export default ChatEntry;
