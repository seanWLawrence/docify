import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader/root';

import ToastContext from '../../contexts/Toast';

const TOAST_DISPLAY_LENGTH_IN_MILLISECONDS = 3000;

class App extends Component {
  state = {
    toastIsVisible: false,
    message: 'Success!',
    displayToast: ({ message }) =>
      this.setState({ toastIsVisible: true }, () =>
        setTimeout(
          () => this.setState({ toastIsVisible: false, message }),
          TOAST_DISPLAY_LENGTH_IN_MILLISECONDS
        )
      ),
  };

  render() {
    let { message, toastIsVisible, displayToast } = this.state;

    return (
      <ToastContext.Provider value={{ displayToast }}>
        {children}
        <Toast isVisible={toastIsVisible} message={message} />
      </ToastContext.Provider>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default hot(App);
