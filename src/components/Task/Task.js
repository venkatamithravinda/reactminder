import React from 'react';
import {Card,CardColumns} from 'react-bootstrap';

const Task = (props) => (
    <div className = "Task">
       <Card>            
            <CardColumns><h2>{props.title}</h2></CardColumns>
            <CardColumns><p>{props.content}</p></CardColumns>
        </Card>
    </div>
    
);

export default Task;

