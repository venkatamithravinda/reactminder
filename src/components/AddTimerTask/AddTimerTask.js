import React from 'react';
import DateTime from 'react-datetime';
import moment from 'moment';

const AddTimerTask = (props) => (
    <div className = "AddTimerTask">
        <p><input type = "text" value = {props.Title} onChange = {props.changedTitle}/></p>
        <p><input type = "text" value = {props.Content} onChange = {props.changedContent}/></p>
        <div style = {{alignContent: 'center'}}><DateTime onChange = {props.changedDatetime}/></div>
        <button className = "btn btn-primary" onClick = {props.clicked}>Submit</button>
    </div>
);

export default AddTimerTask;