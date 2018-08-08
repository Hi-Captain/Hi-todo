import React, { Component } from 'react';
import '../css/Item.css';

export default class Item extends Component {
  constructor(props){
    super(props)
    this.state = {
      isEdit : false,
      tempText : this.props.todo_text
    }
  }
  render() {
    const { isEdit, tempText } = this.state
    const { todo_complete} = this.props
    return (
      <div className={todo_complete ? "todo complete" : "todo"}>
        <div className="todo__circle" onClick={this._go_complete}><span className="check-mark"></span></div>
        <div className="todo__row">
          <div className="todo__row-text">{isEdit ? <input className="isEditing" type="text" value={tempText} maxLength={12} onChange={this._typing} onKeyUp={this._listenKey} autoFocus/> : <span className="Edited" onDoubleClick={this._set_editing}>{tempText}</span>}</div>
          <div className="btn-wrap">
            <i onClick={isEdit ? (this._set_edited) : (this._set_editing)}  className="todo__row-btn menu__link-icon material-icons">{isEdit ? 'done' : 'edit'}</i>
            <i onClick={isEdit ? (this._cancel_editing) : (this._go_del)} className="todo__row-btn menu__link-icon material-icons">{isEdit ? 'clear' : 'delete'}</i>
          </div>
        </div>
      </div>
    );
  }

  _set_editing = () => {
    this.setState({
      isEdit : !this.state.isEdit
    })
  }
  _cancel_editing = () => {
    this.setState({
      tempText : this.props.todo_text,
      isEdit : false
    })
  }
  _typing = (e) => {
    this.setState({
      tempText : e.target.value
    })
  }
  _set_edited = () => {
    const {tempText} = this.state
    const {todo_edit, todo_id} = this.props
    todo_edit(todo_id, tempText)
    this.setState({
      isEdit : !this.state.isEdit
    })
  }

  _go_del = () => {
    const {todo_del, todo_id} = this.props
    todo_del(todo_id)
  }

  _go_complete = () => {
    const {todo_doComplete, todo_id} = this.props
    todo_doComplete(todo_id)
  }

  _listenKey = (e) => {
    if(e.key === 'Enter'){
      this._set_edited()
    } else if(e.key === 'Escape'){
      this._cancel_editing()
    }
  }
}