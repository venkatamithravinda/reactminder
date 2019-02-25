import React from 'react';
import {Card,CardColumns} from 'react-bootstrap';

const Task = (props) => (
    <div className = "TimerTask">
       <Card>            
            <CardColumns><h2>{props.title}</h2>
            <p>{props.datetime}</p></CardColumns>
            <CardColumns><p>{props.content}</p></CardColumns>
        </Card>
    </div>
    
);

export default Task;

