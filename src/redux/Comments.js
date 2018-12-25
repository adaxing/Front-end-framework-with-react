import { COMMENTS } from '../components/SharedComponent/Comments';
import * as ActionTypes from './ActionType';

export const Comments = (state=COMMENTS, action) => {
    switch(action.type){
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            console.log('Comment is :', comment);
            // concat() takes copy of orginal
            return state.concat(comment)
        default:
            return state
    }       
}
