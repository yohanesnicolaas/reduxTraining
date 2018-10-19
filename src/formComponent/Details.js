import React, { Component } from 'react';
import '../App.css';
import Title from './Title.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../redux/actions';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Details extends Component {
  render() {
    return (
      <form className="App-intro" id="reactForm">
      <Title/>
	      <div className="container">
	        <div className="form-group">
				<div className="caption">
						<label className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
		          			Title: 
		        		</label>
					<input required id="inputField" className="form-control" disabled value={this.props.details.textField}/>
				</div>
			</div>
			
			<div className="form-group">
				<div className="caption">
						<label className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
		          			Activity: 
		        		</label>
					<input required id="inputField" className="form-control" disabled value={this.props.details.selectedActivity}/>
				</div>
			</div>

			<div className="form-group">
				<div className="caption">
						<label className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
		          			Description: 
		        		</label>
					<input required id="inputField" className="form-control" disabled value={this.props.details.description}/>
				</div>
			</div>
      	</div>
      </form>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({actions: bindActionCreators(actions, dispatch)})

export default connect(mapStateToProps, mapDispatchToProps)(Details);