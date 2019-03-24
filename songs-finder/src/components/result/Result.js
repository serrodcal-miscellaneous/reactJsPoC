import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class Result extends Component{
  render() {
    return (
    <div>
      <Paper className={this.props.classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          {this.props.title}
        </Typography>
        <Typography component="p">
          {this.props.lyric}
        </Typography>
      </Paper>
    </div>
  )}
}

export default Result;
