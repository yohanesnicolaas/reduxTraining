import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import actions from '../redux/actions';

class Notes extends Component{

	renderContent(){
		const dataNotes = this.props.noteList;
		const listItems = dataNotes.map((note, index) =>
		    <div key={index} className = "form-group">
				  <div className="list-group-item list-group-item-dark list-group-item-action">
				    <div className="d-flex  justify-content-between">
				      <h5 className="mb-1" >Title: {note.textField}</h5>
				      <small >Activity: {note.selectedActivity}</small>
				    </div>
				    <p className="mb-1" >Description: <br/>{note.description}</p>
				    <div className="text-right form-group">
				    	<Link to="/Details"><button className="btn btn-info btn-sm" onClick ={() => {this.props.actions.detailButton(note.textField, note.selectedActivity, note.description)}}>Detail</button></Link>
				  	</div>
				  </div>
			</div>
	  	);
	  return (
	    <div>{listItems}</div>
	  );
	}

	render(){
		return(
			<div>
				{this.renderContent()}
			</div>
		);
	}

}

const mapStateToProps = state => state;

const mapDispactchToProps = dispatch => ({actions: bindActionCreators(actions, dispatch)})

export default connect(mapStateToProps,mapDispactchToProps) (Notes)