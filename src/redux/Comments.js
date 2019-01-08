import * as ActionTypes from './ActionType';

export const Comments = (state={
        errMes:null,
        comments:[]
    }
    , action) => {
    switch(action.type){
        case ActionTypes.ADD_COMMENTS:
            return {
                ...state, isLoading: false, errMes: null, comments:action.payload
            }

        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.comments.length;
            comment.date = new Date().toISOString();
            // concat() takes copy of orginal
            return {
                ...state, isLoading: false, errMes: null, comments: comment
            }

        case ActionTypes.COMMENTS_FAILED:
            return {
                ...state, isLoading: false, errMes: action.payload
            }
        default:
            return state
    }       
}
