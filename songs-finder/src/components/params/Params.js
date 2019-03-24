import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogInfo from '../dialog/DialogInfo'

class Params extends Component{
  render() {

    return (
      <div>
        <div className={this.props.classes.container}>
          <TextField
            className={this.props.classes.textField}
            id="standard-name"
            label="Artist"
            onChange={this.props.artist}
            margin="normal"
            placeholder="Artist"
          />

          <TextField
            className={this.props.classes.textField}
            id="standard-name"
            label="Song"
            onChange={this.props.song}
            margin="normal"
            placeholder="Song"
          />

          <Button className={this.props.classes.button} onClick={this.props.searchMusic} variant="contained" color="primary">Search</Button>
        </div>

      <DialogInfo open={this.props.open} handleClose={this.props.handleClose} errorText={this.props.errorText}/>
    </div>

  )}
}

export default Params;
