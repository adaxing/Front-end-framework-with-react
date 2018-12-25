import { Dishes } from './Dishes';
import { Leaders } from './Leaders';
import { Comments } from './Comments';
import { Promotions } from './Promotions';
import { createStore, combineReducers } from 'redux';


export  const ConfigStore = () => {
    const store = createStore (
        combineReducers({
            dishes: Dishes,
            leaders: Leaders,
            comments: Comments,
            promotions: Promotions
        })
    );
    return store;
} 
  