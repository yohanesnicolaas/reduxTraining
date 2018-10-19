import React, {Component} from 'react';

class ErrorActivity extends Component{

	render(){
		return(
			<div className="form-group">
				<label className="col-lg-4 col-md-4 col-sm-4 col-xs-4" style={{color: "red"}}>
          			Please Input Activity! 
        		</label>
			</div>
		);
	}

}

export default ErrorActivity