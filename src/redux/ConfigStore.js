import { Dishes } from './Dishes';
import { Leaders } from './Leaders';
import { Comments } from './Comments';
import { Promotions } from './Promotions';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export  const ConfigStore = () => {
    const store = createStore (
        //reducers
        combineReducers({
            dishes: Dishes,
            leaders: Leaders,
            comments: Comments,
            promotions: Promotions
        }),
        //store enhancer to trace app
        applyMiddleware(thunk, logger)
    );
    return store;
} 
  