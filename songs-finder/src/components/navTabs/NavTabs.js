import React, { Component }  from 'react';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import NoSsr from '@material-ui/core/NoSsr';
import Typography from '@material-ui/core/Typography';
import logo from '../../logo.svg';
import App from '../../App';
import TodoListApp from '../../features/TodoListApp';
import SearchMusic from '../../features/SearchMusic';
import '../../App.css'


function TabContainer(props) {
  return (
    <Typography component="div">
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

function LinkTab(props) {
  return <Tab component="a" onClick={event => event.preventDefault()} {...props} />;
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class NavTabs extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <NoSsr>
        <div className={classes.root}>
          <AppBar position="static">
            <img src={logo} className="App-logo" alt="logo" />
            <Tabs variant="fullWidth" value={value} onChange={this.handleChange}>
              <LinkTab label="Home" href="/" />
              <LinkTab label="Todo List" href="/todo-list" />
              <LinkTab label="Search Music" href="search-music" />
            </Tabs>
          </AppBar>
          {value === 0 && <TabContainer><App/></TabContainer>}
          {value === 1 && <TabContainer><TodoListApp/></TabContainer>}
          {value === 2 && <TabContainer><SearchMusic/></TabContainer>}
        </div>
      </NoSsr>
    );
  }
}

NavTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavTabs);
