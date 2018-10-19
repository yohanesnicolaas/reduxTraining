import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Details from './formComponent/Details.js';
import registerServiceWorker from './registerServiceWorker';
import { persistor, store } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { BrowserRouter, Route } from 'react-router-dom';

/*
const initialState={
    showComponent: false,
    textField: null,
    description: null,
    selectedActivity: "",
    noteList: [],
 }*/

/*let store = configureStore(initialState);*/

ReactDOM.render( 
	<Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter>  		
      <div>
      		<Route exact path="/" component={App} />
          <Route path="/Details" component={Details} />    
      </div>
    </BrowserRouter>
    </PersistGate>
  </Provider>, 
  	document.getElementById('root'));
registerServiceWorker();
