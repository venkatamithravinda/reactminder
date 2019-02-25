import React from 'react';

const AddTask = (props) => (
    <div className = "AddTask">
        <p><input type = "text" value = {props.Title} onChange = {props.changedTitle}/></p>
        <p><input type = "text" value = {props.Content} onChange = {props.changedContent}/></p>
        <button className = "btn btn-primary" onClick = {props.clicked}>Submit</button>
    </div>
);

export default AddTask;