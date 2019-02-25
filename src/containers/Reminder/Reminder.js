import React, { Component } from 'react';
import {Route, NavLink, Switch,Redirect} from 'react-router-dom';
import NormalTasks from './NormalTasks/NormalTasks';
import TimerTasks from './TimerTasks/TimerTasks';

class Reminder extends Component {
    render(){
        return (            
            <div className = "Reminder">
                <header>
                    <nav>
                        <ul>
                            <h1>DEV Branch in Git</h1>
                            <li><NavLink to= "/normal-tasks">NormalTasks</NavLink></li>
                            <li><NavLink to = "/timer-tasks">TimerTasks</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path = "/normal-tasks" component = {NormalTasks}/>
                    <Route path = "/timer-tasks" component = {TimerTasks}/>
                    <Redirect from = "/" to = "/normal-tasks"/>
                </Switch>
            </div>
        );
    }
}

export default Reminder;
