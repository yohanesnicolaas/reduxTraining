import React, {Component} from 'react';

class TextArea extends Component {

    textareaValue = (e) => {
    	e.preventDefault();
    	this.props.addDescription(e.target.value);
	}

	render(){
		return(
	        <div className="form-group">
				<div className="caption">
						<label className="col-lg-4 col-md-4 col-sm-4 col-xs-4" >
		          			Description: 
		        		</label>
					<textarea id="inputDesc" required className="form-control" onChange={ this.textareaValue }/>
				</div>
			</div>
		);
	}
}

export default TextArea