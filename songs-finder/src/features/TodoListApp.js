import React, { Component } from 'react';
import '../App.css';
import TodoList from '../components/todo-list/TodoList';
import TodoItem from '../components/todo-item/TodoItem';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: theme.spacing.unit * 2,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  root: {
    ...theme.mixins.gutters(),
    marginTop: theme.spacing.unit * 10,
    marginLeft: theme.spacing.unit * 10,
    marginRight: theme.spacing.unit * 10,
    paddingTop: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 10,
    paddingRight: theme.spacing.unit * 10,
    paddingBottom: theme.spacing.unit * 2,
  },
  button: {
    marginLeft: theme.spacing.unit * 2,
  },
});

class TodoListApp extends Component {
  constructor(){
    super();
    this.state = {
      items: [],
      currentItem: {text:'', key:''}
    }
  }

  handleInput = e => {
    const itemText = e.target.value;
    const currentItem = { text: itemText, key: Date.now() };
    this.setState({
      currentItem,
    });
  }

  addItem = e => {
    e.nativeEvent.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.itemText !== ''){
      const its = this.state.items;
      its.push(newItem);
      this.setState({
        item: its,
        currentItem: {text: '', key: ''}
      });
    }
  }

  clearItems = e => {
    e.nativeEvent.preventDefault();
    this.setState({items: []});
  }



  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <div className="App-body">
          <TodoList addItem={this.addItem}
            inputElement={this.inputElement}
            handleInput={this.handleInput}
            currentItem={this.state.currentItem}
            classes={ classes }
            clearItems={this.clearItems}
            itemName={this.state.currentItem.text}/>
          <div>
          <br></br>
            <TodoItem entries={this.state.items}/>
          </div>

        </div>
      </div>
    );
  }
}


TodoListApp.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TodoListApp);
