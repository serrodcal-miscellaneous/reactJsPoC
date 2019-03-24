import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import './TodoItem.css';

class TodoItem extends Component{

  render (){
    return(
     <div className="root">
        <Grid container spacing={24}>
        { this.props.entries.map( function(item){
          return <Grid key={item.key} item xs={12}><Paper className="paper">{item.text}</Paper></Grid>
        })}
        </Grid>
     </div>
   )
  }

}

export default TodoItem;
