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
    const { todo_text, todo_complete} = this.props
    return (
      <div className={todo_complete ? "todo complete" : "todo"}>
        <div className="todo__circle" onClick={this._go_complete}><span className="check-mark"></span></div>
        <div className="todo__row">
          <div className="todo__row-text">{isEdit ? <input className="isEditing" type="text" value={todo_text} onChange={this._go_edit} onKeyPress={this._enterKey} autoFocus/> : <span className="Edited">{todo_text}</span>}</div>
          <div className="btn-wrap">
            <i onClick={this._set_edit} className="todo__row-btn menu__link-icon material-icons">{isEdit ? 'done' : 'edit'}</i>
            <i onClick={this._go_del} className="todo__row-btn menu__link-icon material-icons">delete</i>
          </div>
        </div>
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