import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import TextField from '@material-ui/core/TextField';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class Params extends Component{
  render() {
    return (
      <div>
        <div className={this.props.foo2}>
          <TextField
            className={this.props.textField}
            id="standard-name"
            label="Artist"
            onChange={this.props.artist}
            margin="normal"
            placeholder="Artist"
          />

          <TextField
            className={this.props.textField}
            id="standard-name"
            label="Song"
            onChange={this.props.song}
            margin="normal"
            placeholder="Song"
          />

          <Button className={this.props.button} onClick={this.props.searchMusic} variant="contained" color="primary">Search</Button>
        </div>

        <Dialog open={this.props.open} onClose={this.props.handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
          <DialogTitle id="alert-dialog-title">Warning</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            The artist name or the title song can not empty.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>

  )}
}

export default Params;
