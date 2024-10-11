import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import './index.css';

// Simple reducer for likes
const likesReducer = (state = {}, action) => {
  switch (action.type) {
    case 'INCREMENT_LIKES':
      return {
        ...state,
        [action.payload]: (state[action.payload] || 0) + 1
      };
    default:
      return state;
  }
};

const store = createStore(likesReducer);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);