import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const API_URL = 'https://api.lyrics.ovh/v1/';

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
  },
  button: {
    marginLeft: theme.spacing.unit * 2,
  },
});

class App extends Component {
  constructor(){
    super();
    this.state={
      lyric: '',
      song: '',
      artist: '',
      open: false,
    }

  }

  handleClose = () => {
    this.setState({
      song: this.state.song,
      artist: this.state.artist,
      open: false,
    });
  };

  handleInputSong= e => {
    this.state.song = e.target.value;
  }

  handleInputArtist= e => {
    this.state.artist = e.target.value;
  }

  searchMusic= () => {
    if(!this.state.artist || !this.state.song){
      this.state.open = true;
      this.setState({
        song: this.state.song,
        artist: this.state.artist,
        open: true,
      });
    }else{
      fetch(API_URL + this.state.artist + '/' + this.state.song)
        .then(response => response.json())
        .then(data => this.setState({ lyric: data.lyrics }));
    }

  }

  render() {
    const { classes } = this.props;;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="App-body">

          <div className={classes.container}>
            <TextField
              className={classes.textField}
              id="standard-name"
              label="Artist"
              onChange={this.handleInputArtist}
              margin="normal"
              placeholder="Artist"
            />

            <TextField
              className={classes.textField}
              id="standard-name"
              label="Song"
              onChange={this.handleInputSong}
              margin="normal"
              placeholder="Song"
            />

          <Button className={classes.button} onClick={this.searchMusic} variant="contained" color="primary">Search</Button>
          </div>

          <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Warning</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              ¡Navajaso! hahaha, pero casi... anda, pon un artista y una canción, chalao...
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>

          <div>
            <Paper className={classes.root} elevation={1}>
              <Typography variant="h5" component="h3">
                Result:
              </Typography>
              <Typography component="p">
                {this.state.lyric}
              </Typography>
            </Paper>
          </div>

        </div>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);

//export default App;
