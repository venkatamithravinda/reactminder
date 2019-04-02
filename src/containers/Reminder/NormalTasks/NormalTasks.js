import React, { Component} from 'react';
import Task from '../../../components/Task/Task';
import axios from 'axios';
import AddTask from '../../../components/AddTask/AddTask';

class NormalTasks extends Component{
    state = {
            NormalTasks: null,
            show: false,
            Title: '',
            Content: ''
        };

    componentDidMount () {
        this.getNormalTasksHandler();
    }
    
    getNormalTasksHandler = () => {
        axios.get('https://react-my-builder-3e815.firebaseio.com/NormalTasks.json')
        .then(res => {
            if(res.data !== null){
                this.setState({NormalTasks: res.data});
            }
            else {
                this.setState({NormalTasks: null})
            }
        })
        .catch(error => {
            console.log(error);
        });
    }

    showAddNormalTaskHandler = () => {
        this.setState({show: true})
    }
    addNormalTaskHandler = () => {        
        console.log(this.state.show);
        const Title = this.state.Title;
        const Content = this.state.Content;
        const tasks = {Title: Title,Content: Content};
        axios.post('https://react-my-builder-3e815.firebaseio.com/NormalTasks.json', tasks)
            .then(res => {
                console.log(res.data);
                this.getNormalTasksHandler();
                this.setState({show:false})
            })
            .catch(error => {
                console.log(error);
            });            
    }

    deleteNormalTaskHandler = (index) => {
        console.log("index to be deleted" + index);
        axios.delete('https://react-my-builder-3e815.firebaseio.com/NormalTasks/' + index + '.json')
            .then(res => {
                this.getNormalTasksHandler();
            });
    }

    addTitleHandler = (event) => {
        this.setState({Title: event.target.value});
    }

    addContentHandler = (event) => {
        this.setState({Content: event.target.value});        
    }

    render() {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
        let task =  <h1>No Tasks to Show-change</h1>;
         if(this.state.NormalTasks){
            task = Object.keys(this.state.NormalTasks).map((task) => {
                const eachTask = this.state.NormalTasks;
                if(eachTask[task] !== null) {                
                    return (<div key = {task}>                    
                        <Task title = {eachTask[task].Title}
                            content = {eachTask[task].Content}                   
                            />
                            <button className = "btn btn-danger" 
                            onClick = {() => {this.deleteNormalTaskHandler(task)}}
                            >Delete</button>
                    </div>);
                }
            })
        }
        return (
            <div>
                <button className = "btn btn-success" onClick = {this.showAddNormalTaskHandler}>Add</button>
                {this.state.show ? <AddTask changedTitle = {this.addTitleHandler}
                    changedContent = {this.addContentHandler}
                    Title = {this.state.Title}
                    Content = {this.state.Content}
                    clicked = {this.addNormalTaskHandler}/> : null}
                {task}
            </div>      
        )
    }
}

export default NormalTasks;
