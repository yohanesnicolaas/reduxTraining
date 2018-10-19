import React, { Component } from 'react';
import '../App.css';
import Button from './Button.js';
import ComboBox from './ComboBox.js';
import TextArea from './TextArea.js';
import Title from './Title.js';
import TitleField from './TitleField.js';
import ClearButton from './ClearButton.js'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ErrorTextField from './ErrorTextField.js';
import ErrorActivity from './ErrorActivity.js';
import ErrorDescription from './ErrorDescription.js';
import Notes from './Notes.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../redux/actions';

class Form extends Component {
  render() {
    const combo = {keyCombo:["Learn", "Play", "Sleep"]};
    console.log(this);
    return (
      <form className="App-intro" id="reactForm">
      <Title/>
          <div className="container">
            <TitleField addTitle={this.props.actions.addTitle}/>
            {!this.props.validTextField && <ErrorTextField />}
            <ComboBox forloop={combo} addActivity={this.props.actions.addActivity}/>
            {!this.props.validActivity && <ErrorActivity />}
            <TextArea addDescription={this.props.actions.addDescription}/>
            {!this.props.validDescription && <ErrorDescription />}
            <Button buttonClicked={this.props.actions.buttonClicked} />
            {this.props.showComponent && <Notes noteList={this.props.noteList} />}
            {this.props.showComponent && <ClearButton clearButtonClicked={this.props.actions.clearButtonClicked} /> }
          </div>
      </form>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({actions: bindActionCreators(actions, dispatch)})

export default connect(mapStateToProps, mapDispatchToProps)(Form);