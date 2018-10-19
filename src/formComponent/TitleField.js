import React, {Component} from 'react';

class TitleField extends Component{

	textFieldValue = (e) => {
		e.preventDefault();
		this.props.addTitle(e.target.value);
	}

	render(){
		return(
			<div className="form-group">
				<div className="caption">
						<label className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
		          			Title: 
		        		</label>
					<input required id="inputField" className="form-control" onChange={ this.textFieldValue.bind(this) } />
				</div>
			</div>
		);
	}

}

export default TitleField