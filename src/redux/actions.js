let actions = {

	addTitle: (textField) => ({
		type: 'ADD_TITLE',
		textField: textField,
	}),

	addDescription: (description) => ({
		type: 'ADD_DESCRIPTION',
		description: description,
	}),

	addActivity: (selectedActivity) => ({
		type: 'ADD_ACTIVITY',
		selectedActivity: selectedActivity,
	}),

	buttonClicked: (showComponent) => ({
		type: 'BUTTON_CLICKED',
	}),

	detailButton: (textField, selectedActivity, description) => ({
		type: 'DETAIL_BUTTON',
		textField: textField,
		selectedActivity: selectedActivity,
		description: description
	}),

	clearButtonClicked: () => ({
		type: 'CLEAR_LIST', 
	})
}

export default actions