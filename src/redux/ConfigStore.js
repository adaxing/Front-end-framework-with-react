import { Dishes } from './Dishes';
import { Leaders } from './Leaders';
import { Comments } from './Comments';
import { Promotions } from './Promotions';
import { InitialFeedback } from './Form';
import { Feedbacks } from './Feedback';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createForms } from 'react-redux-form';

export  const ConfigStore = () => {
    const store = createStore (
        //reducers
        combineReducers({
            dishes: Dishes,
            leaders: Leaders,
            comments: Comments,
            promotions: Promotions,
            feedbacks: Feedbacks,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        //store enhancer to trace app
        applyMiddleware(thunk, logger)
    );
    return store;
} 
  