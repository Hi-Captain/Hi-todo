import React, { Component } from 'react';
import '../css/Item.css';

export default class Item extends Component {
  render() {
    const {todo_id, todo_text} = this.props
    return (
      <div>
        <div>id : {todo_id}</div>
        <div>text : {todo_text}</div>
        <button onClick={this._go_del}>x</button>
      </div>
    );
  }
  _go_del = () => {
    const {todo_del, todo_id} = this.props
    todo_del(todo_id)
  }
}