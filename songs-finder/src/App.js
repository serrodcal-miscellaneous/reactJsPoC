import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import TextField from '@material-ui/core/TextField';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Result from './components/result/Result';
import Params from './components/params/Params';

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
    paddingTop: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 10,
    paddingRight: theme.spacing.unit * 10,
    paddingBottom: theme.spacing.unit * 2,
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
      open: false,
    });
  };

  handleInputSong = e => {
    this.setState({
      song: e.target.value.replace(/\s/g, "%20"),
    });
  }

  handleInputArtist = e => {
    this.setState({
      artist: e.target.value.replace(/\s/g, "%20"),
    });
  }

  searchMusic= () => {
    if(!this.state.artist || !this.state.song){
      this.setState({
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

          <Params foo={classes} foo2={classes.container} artist={this.handleInputArtist}
                  song={this.handleInputSong} searchMusic={this.searchMusic}
                  handleClose={this.handleClose} open={this.state.open}/>

          <Result foo={classes.root} lyric={this.state.lyric}/>

        </div>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
