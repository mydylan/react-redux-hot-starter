import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as action from '../actions/action';

@connect(state => ({

}))

export default class Dashboard extends Component {

  static propTypes = {

  }

  render() {
    const actions = bindActionCreators(action, this.props.dispatch);
    return (
      <div id="container" className="container-fluid">
        Your React Redux Starter Kit
      </div>
    );
  }
}
