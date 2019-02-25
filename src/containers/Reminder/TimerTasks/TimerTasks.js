import React,{ Component} from 'react';
import TimerTask from '../../../components/TimerTask/TimerTask';
import axios from 'axios';
import AddTimerTask from '../../../components/AddTimerTask/AddTimerTask'; 

class TimerTasks extends Component {
    state = {
        TimerTasks: [],
        show: false,
        Title: '',
        Content: '',
        Datetime: ''
    };
    componentDidMount () {
        this.getTimerTasksHandler();
    }
    
    getTimerTasksHandler = () => {
        axios.get('https://react-my-builder-3e815.firebaseio.com/TimerTasks.json')
        .then(res => {
            if(res.data !== null){
                this.setState({TimerTasks: res.data});
            }
            else {
                this.setState({TimerTasks: null})
            }
        })
        .catch(error => {
            console.log(error);
        });
    }
    showAddTimerTaskHandler = () => {
        this.setState({show: true})
    }

    addTimerTaskHandler = () => {        
        console.log(this.state.show);
        const Title = this.state.Title;
        const Content = this.state.Content;
        const Datetime = this.state.Datetime;
        const tasks = {Title: Title,Content: Content,Datetime: Datetime};
        axios.post('https://react-my-builder-3e815.firebaseio.com/TimerTasks.json', tasks)
            .then(res => {
                console.log(res.data);
                this.getTimerTasksHandler();
                this.setState({show:false})
            })
            .catch(error => {
                console.log(error);
            });            
    }
    deleteTimerTaskHandler = (index) => {
        console.log("index to be deleted" + index);
        axios.delete('https://react-my-builder-3e815.firebaseio.com/TimerTasks/' + index + '.json')
            .then(res => {
                this.getTimerTasksHandler();
            });
    }  

    addTitleHandler = (event) => {
        this.setState({Title: event.target.value});
    }

    addContentHandler = (event) => {
        this.setState({Content: event.target.value});        
    }

    addDatetimeHandler = (date) => {
        const d = date;
        console.log(d);
        this.setState({Datetime: date});
    }
    render(){
        let task =  <h1>No Tasks to Show</h1>;
         if(this.state.TimerTasks){
            task = Object.keys(this.state.TimerTasks).map((task) => {
                const eachTask = this.state.TimerTasks;
                if(eachTask[task] !== null) {                
                    return (<div key = {task}>                    
                        <TimerTask title = {eachTask[task].Title}
                            content = {eachTask[task].Content}
                            datetime = {eachTask[task].Datetime}                   
                            />
                            <button className = "btn btn-danger" 
                            onClick = {() => {this.deleteTimerTaskHandler(task)}}
                            >Delete</button>
                    </div>);
                }
            })
        }      
        
        return (
            <div>
                <button className = "btn btn-success" onClick = {this.showAddTimerTaskHandler}>Add</button>
                {this.state.show ? <AddTimerTask changedTitle = {this.addTitleHandler}
                    changedContent = {this.addContentHandler}
                    changedDatetime = {this.addDatetimeHandler}
                    Title = {this.state.Title}
                    Content = {this.state.Content}                    
                    clicked = {this.addTimerTaskHandler}/> : null}
                {task}
            </div> 
        );
    }
}

export default TimerTasks;