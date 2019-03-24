import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
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
      title: '',
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
        .then(response => {
          if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json()
        })
        .then(data => this.setState({ lyric: data.lyrics, title: this.state.song + " - " + this.state.artist }))
        .catch(error => {
        let text = 'Song not found.'
        let title = 'Error'
        this.setState({ lyric: text, title: title });
      });
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="App-body">

          <Params classes={classes} artist={this.handleInputArtist}
                  song={this.handleInputSong} searchMusic={this.searchMusic}
                  handleClose={this.handleClose} open={this.state.open}/>

          {this.state.lyric ? <Result classes={classes} lyric={this.state.lyric} title={this.state.title}/> : null}

        </div>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
