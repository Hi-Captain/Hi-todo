import React, { Component } from 'react';
import '../css/Item.css';

export default class Item extends Component {
  constructor(props){
    super(props)
    this.state = {
      isEdit : false
    }
  }
  render() {
    const { isEdit } = this.state
    const { todo_id, todo_text, todo_complete} = this.props
    return (
      <div className={todo_complete ? "todo complete" : "todo"}>
        <div>id : {todo_id}</div>
        <div className="completeBtn" onClick={this._go_complete}>complete : {todo_complete ? <span>☑︎</span> : <span>□</span>}</div>
        <div>text : {isEdit ? <input className="isEditing" type="text" value={todo_text} onChange={this._go_edit} onKeyPress={this._enterKey} autoFocus/> : <span>{todo_text}</span>}</div>
        <button onClick={this._set_edit}>{isEdit ? 'confirm' : 'edit'}</button>
        <button onClick={this._go_del}>del</button>
      </div>
    );
  }

  _set_edit = () => {
    this.setState({
      isEdit : !this.state.isEdit
    })
  }

  _go_edit = (e) => {
    const {todo_edit, todo_id} = this.props
    todo_edit(todo_id, e.target.value)
  }

  _go_del = () => {
    const {todo_del, todo_id} = this.props
    todo_del(todo_id)
  }

  _go_complete = () => {
    const {todo_doComplete, todo_id} = this.props
    todo_doComplete(todo_id)
  }

  _enterKey = (e) => {
    if(e.key === 'Enter'){
      this._set_edit()
    }
  }
}