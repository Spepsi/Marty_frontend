/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import IconButton from 'material-ui/IconButton';
import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle';
import {
  BottomNavigation,
  BottomNavigationItem,
} from 'material-ui/BottomNavigation';
// import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

import AppBar from 'material-ui/AppBar';

import { browserHistory } from 'react-router';

const recentsIcon = <IconLocationOn />;
const favoritesIcon = <IconLocationOn />;
const nearbyIcon = <IconLocationOn />;

export default class App extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    children: React.PropTypes.node,
  };
  state = {
    selectedIndex: 1,
  };

  select = (index) => {
    const routeArray = ['/reco', '', 'history'];
    this.setState({ selectedIndex: index });
    browserHistory.push(routeArray[index]);
  };

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            style={styles.AppBar}
            iconElementRight={
              <IconButton iconStyle={styles.smallIcon} style={styles.small}>
                <ActionAccountCircle />
              </IconButton>
            }
          />
          {React.Children.toArray(this.props.children)}
          <BottomNavigation
            selectedIndex={this.state.selectedIndex}
            style={styles.footer}
          >
            <BottomNavigationItem
              label="Reco"
              icon={recentsIcon}
              onTouchTap={() => this.select(0)}
            />
            <BottomNavigationItem
              label="Scan"
              icon={favoritesIcon}
              onTouchTap={() => this.select(1)}
            />
            <BottomNavigationItem
              label="Favoris"
              icon={nearbyIcon}
              onTouchTap={() => this.select(2)}
            />
          </BottomNavigation>
        </div>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  footer: {
    position: 'fixed',
    bottom: 0,
  },
  smallIcon: {
    width: 50,
    height: 50,
    color: 'rgba(0, 0, 0, 0.87)',
    fill: 'rgba(0, 0, 0, 0.54)',
  },
  small: {
    width: 50,
    height: 50,
    padding: 0,
    color: 'rgba(0, 0, 0, 0.87)',
    fill: 'rgba(0, 0, 0, 0.54)',
  },
  AppBar: {
    backgroundColor: "white",
  },
};
