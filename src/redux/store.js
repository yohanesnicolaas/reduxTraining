import { applyMiddleware, compose, createStore } from 'redux'
import reducer from './reducer';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const initialState={
    showComponent: false,
    textField: null,
    description: null,
    selectedActivity: "",
    noteList: [],
    validTextField: true,
    validActivity: true,
    validDescription: true
 }

let finalCreateStore = compose (
	applyMiddleware(logger)
) (createStore)

const persistConfig = {
	key:'root',
	storage: storage,
	stateReconciler: autoMergeLevel2
};

const pReducer = persistReducer(persistConfig, reducer);

export const store = finalCreateStore(pReducer, initialState);
export const persistor = persistStore(store, initialState);

/*export default function configureStore(initialState)
{
	return finalCreateStore(pReducer, initialState)
}*/