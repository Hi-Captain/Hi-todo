import React, { Component } from 'react';
import '../css/Todo.css';
import Item from './Item';
import axios from 'axios';

class Todo extends Component {
  constructor(props){
    super(props)
    this.state = {
      Todo_list : [],
      Add_text : ''
    }
  }

  componentDidMount(){
    axios.get("./list.json")
    .then(response => {
      const list_data = response.data.list
      this.setState({
        Todo_list: list_data
      })
    })
    .catch( err => {console.log(err.stack)});
  }

  render() {
    const {Todo_list, Add_text} = this.state
    return (
      <div className="main">
        <h1 className="title">Hi-Todo</h1>
        <div className="add-wrap" onKeyPress={this._enterKey}>
          <input className="add__input" type="text" name="todo" placeholder="New ToDo" 
                 value={Add_text} maxLength={12} onChange={this._typing}/>
          <button className="add__btn" onClick={this._todo_add}>Add</button>
        </div>
        <div className="list-wrap">
          {Todo_list.map((value, i) => {
            return (
              <Item 
                key={i} 
                todo_id={value.id} 
                todo_text={value.text} 
                todo_complete={value.complete}
                todo_del={this._todo_del}
                todo_edit={this._todo_edit}
                todo_doComplete={this._todo_doComplete} />
            )
          })}
        </div>
      </div>
    );
  }
  _typing = (e) => {
    this.setState({
      Add_text : e.target.value
    })
  }

  _enterKey = (e) => {
    if(e.key === 'Enter'){
      this._todo_add()
    }
  }

  _todo_add = () => {
    if(this.state.Add_text !== ''){
      const {Todo_list, Add_text} = this.state
      this.setState({
        Add_text: '',
        Todo_list : Todo_list.concat({
                      id: Todo_list.length,
                      text: Add_text,
                      complete: false
                    })
      })
    }
  }

  _todo_del = (id) => {
    const {Todo_list} = this.state
    const list = Todo_list
    delete list[id]
    this.setState({
      Todo_list : list
    })
  }
  
  _todo_edit = (id, txt) => {
    const {Todo_list} = this.state
    const list = Todo_list
    list[id].text = txt
    this.setState({
      Todo_list : list
    })
  }

  _todo_doComplete = (id) => {
    const {Todo_list} = this.state
    const list = Todo_list
    list[id].complete = !list[id].complete
    this.setState({
      Todo_list : list
    })
  }
}

export default Todo;
