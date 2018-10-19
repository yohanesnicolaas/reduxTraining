import React, { Component } from 'react';

class ClearButton extends Component{

	clickClearButton = (e) => {
		this.props.clearButtonClicked(e.target.value);
	 }

	render(){
		//this.props.onClick(this.state.value);
		return(
			<div className = "text-right form-group">
				<button type="button" className="btn btn-danger" onClick={this.clickClearButton.bind(this)}>Clear List</button>
			</div>
		);
	}
}

export default ClearButton