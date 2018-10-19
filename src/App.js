import React, { Component } from 'react';
import './App.css';
import Form from './formComponent/Form.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from './redux/actions';

/*{this.props.showComponent ? <Notes data={this.props.noteList}/> : null }*/

class App extends Component {
  render() {
    console.log(this);
    return (
      <Form />
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({actions: bindActionCreators(actions, dispatch)})

export default connect(mapStateToProps, mapDispatchToProps)(App);


