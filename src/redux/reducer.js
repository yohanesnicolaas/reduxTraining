import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist'

const rootPersistConfig = {
  key: 'root',
  storage,
};


let reducer = (state,action) => {

	let textField = action.textField;
	let selectedActivity = action.selectedActivity;
	let description = action.description;

	switch (action.type) {
		case "ADD_TITLE":
			return Object.assign({}, state, {textField, validTextField: true});

    	case "ADD_ACTIVITY":
    		return Object.assign({}, state, {selectedActivity, validActivity: true});
    	
    	case "ADD_DESCRIPTION":
    		return Object.assign({}, state, {description, validDescription: true});
		
		case "BUTTON_CLICKED":
			console.log(state);
			var validTextField_ = true;
			var validActivity_ = true;
			var validDescription_ = true;
			if(state.textField == null || state.textField == "" ){
				validTextField_ = false
			} 
			if (state.selectedActivity == null || state.selectedActivity == "") {
				validActivity_ = false
			}
			if (state.description == null || state.description == "") {
				validDescription_ = false
			} 
			if(validDescription_ && validActivity_ && validTextField_){
				return Object.assign({}, state, {
					showComponent: true,
					validTextField: validTextField_,
					validActivity: validActivity_,
					validDescription: validDescription_,
					noteList: state.noteList.concat(state),
					textField: null,
				    description: null,
				    selectedActivity: "",
					//noteList: []
				});
			} else {
				return Object.assign({}, state, {
					validTextField: validTextField_,
					validActivity: validActivity_,
					validDescription: validDescription_,
				});
			}
				
			
    	case "CLEAR_LIST":
    		return{
    			showComponent: false,
			    textField: null,
			    description: null,
			    selectedActivity: "",
			    noteList: [],
			    validTextField: true,
			    validActivity: true,
			    validDescription: true
    		};

    	case "DETAIL_BUTTON":
    		return Object.assign({}, state, {
    			details: {textField, selectedActivity, description}
    		});
		default:
			return state;
	}
}

export default persistReducer(rootPersistConfig, reducer)