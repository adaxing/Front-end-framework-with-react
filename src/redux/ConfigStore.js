import { Reducer, initialState } from './Reducer';
import { createStore } from 'redux';


export  const ConfigStore = () => {
    const store = createStore (
        Reducer, 
        initialState
      );
    return store;
} 
  