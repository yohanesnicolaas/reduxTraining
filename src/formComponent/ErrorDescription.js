import React, {Component} from 'react';

class ErrorDescription extends Component{

	render(){
		return(
			<div className="form-group">
				<label className="col-lg-4 col-md-4 col-sm-4 col-xs-4" style={{color: "red"}}>
          			Please Input Description! 
        		</label>
			</div>
		);
	}

}

export default ErrorDescription