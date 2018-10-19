import React, {Component} from 'react';

class ComboBox extends Component {

    selectedValue = (e) => {
	    this.props.addActivity(e.target.value);
	}

	render(){
		console.log(this.props.forloop);
		const option = this.props.forloop;
		console.log(option);
		return(
			<div className="form-group">
				<div className="caption">
					<label className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
	          			Activity: 
	        		</label>

	        		

	        		<select id="selectBox" required className="form-control" onChange={ this.selectedValue.bind(this) } defaultValue={this.props.addActivity.name} >
	        			<option value="" disabled>Select Data...</option>
						{option.keyCombo.map((combo, index) => 
							<option key={index} value={combo}>{combo}</option>
						)};
					</select>
				</div>
			</div>				
		);
	}
}

export default ComboBox