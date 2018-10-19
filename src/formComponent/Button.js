import React, { Component } from 'react';

class Button extends Component{

	clickMe = (e) => {
		this.props.buttonClicked(e.target.value);
	 }

	render(){
		//this.props.onClick(this.state.value);
		return(
			<div className="text-center form-group">
				<button type="submit" className="btn btn-primary" onClick={this.clickMe.bind(this)}>Submit Activity</button>
			</div>
		);
	}
}

export default Button