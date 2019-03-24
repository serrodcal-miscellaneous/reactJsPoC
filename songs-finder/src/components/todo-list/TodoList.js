import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import 'typeface-roboto';
import '../../App.css';
import TextField from '@material-ui/core/TextField';

class TodoList extends Component {

  render() {
    return (
      <div className={this.props.classes.container}>
        <TextField
          className={this.props.classes.textField}
          label="Item"
          onChange={this.props.handleInput}
          value={this.props.itemName}
          margin="normal"
          placeholder="Add item..."
        />

        <Button className={this.props.classes.button} onClick={this.props.addItem} variant="contained" color="primary">Add</Button>
        <Button className={this.props.classes.button} onClick={this.props.clearItems} variant="contained" color="primary">Clear</Button>
      </div>

    );
  }
}

export default TodoList;
