import React, { Component } from 'react';
import '../css/Item.css';

export default class Item extends Component {
  render() {
    return (
      <div>
        <div>id : {this.props.todo_id}</div>
        <div>text : {this.props.todo_text}</div>
      </div>
    );
  }
}