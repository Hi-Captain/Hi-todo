import React, { Component } from 'react';
import '../css/Todo.css';
import Item from './Item';

class Todo extends Component {
  constructor(props){
    super(props)
    this.state = {
      Todo_list : [],
      Add_text : ''
    }
  }
  render() {
    const {Todo_list, Add_text} = this.state
    return (
      <div className="main">
        Hi-Todo
        <div className="add-wrap" onKeyPress={this._EnterKey}>
          <input type="text" name="todo" placeholder="New ToDo" value={Add_text} onChange={this._typing}/>
          <button onClick={this._todo_add}>Add</button>
        </div>
        <div> {/* 리스트 테스트 */}
          <div>
            리스트입니다.
            {Todo_list.map((value, i) => {
              return (
                <Item className="todo" key={i} todo_id={value.id} todo_text={value.text} />
              )
            })}
          </div>
          <div>
           들어갈 것 : {Add_text}
          </div>
        </div>
      </div>
    );
  }
  _typing = (e) => {
    this.setState({
      Add_text : e.target.value
    })
  }

  _EnterKey = (e) => {
    if(e.key === 'Enter'){
      this._todo_add()
    }
  }

  _todo_add = () => {
    const {Todo_list, Add_text} = this.state
    const list = Todo_list,
          item = {
            id: Todo_list.length + 1,
            text: Add_text
          }
    this.setState({
      Todo_list : list.concat(item),
      Add_text: ''
    })
  }
}

export default Todo;
