import { Component } from "react";
import check from './check.png';
import edit from './edit.png';
import tasks from './tasks.png';

export class Todolist extends Component{
    state = {
        userInput:'',
        noteList: [],
        deleteList: [],
    }

onChangeEvent(e){
    this.setState({userInput: e})
    }

addItem(input){
    if (input===''){
        alert('Type the text ...')
    }
    else{
        let listArray=this.state.noteList;
        listArray.push(input);
        this.setState({noteList:listArray, userInput:''})
    }
}

deleteOne(input,index){
    let listArray=this.state.noteList;
    let delArray=this.state.deleteList;
    listArray.splice(index,1);
    delArray.push(input)   
    this.setState({noteList:listArray})
    this.setState({deleteList:delArray})
}

returnOne(input,index){
    let listArray=this.state.noteList;
    let delArray=this.state.deleteList;
    listArray.push(input);
    delArray.splice(index,1)
    this.setState({noteList:listArray})
    this.setState({deleteList:delArray})
}

deleteDone(){
    let delArray=this.state.deleteList;
    delArray=[];
    this.setState({deleteList:delArray})  
}

deleteAll(){
    let listArray=this.state.noteList;
    listArray=[];
    this.setState({noteList:listArray})
    let delArray=this.state.deleteList;
    delArray=[];
    this.setState({deleteList:delArray}) 
}

onFormSubmit(e){
    e.preventDefault()
}

render() {
    return(
    <form className="container" onSubmit={this.onFormSubmit}>
    <div>
        <img className='App-logo' src= {tasks} alt="logo"/>
        <h1> To Do List</h1>
    <div className="addTask">
        <input value={this.state.userInput} placeholder="Enter task here ..." type='text' onChange={(e)=>{this.onChangeEvent(e.target.value)}} />
        <button className="addBtn" onClick={()=>this.addItem(this.state.userInput)}>✔️</button>
    </div>
    <ul>
        {this.state.noteList.map((item, index)=>(
        <li key={index}>
        {item }                  
    <div>
        <img src={check} width='26px' alt='del' onClick={()=>this.deleteOne(item,index)}  />
    </div>
        </li>
        ))}
    </ul>                
    <ul>
        {this.state.deleteList.map((item, index)=>(
        <li className="liTwo"  key={index}>
        {item}                  
        <img src={edit} width='25px' alt='del' onClick={()=>this.returnOne(item,index)}  />
        </li>
        ))}
    </ul>
    </div>
    <div>
        <button className="deleteDoneBtn" onClick={()=>this.deleteDone()}> Delete completed </button>
        <button className="deleteAllBtn" onClick={()=>this.deleteAll()}> Clear all </button>
    </div>
    </form>   
    )
}
}