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
            // concat() takes copy of orginal
            return {
                ...state, isLoading: false, errMes: null, comments: state.comments.concat(comment)
            }

        case ActionTypes.COMMENTS_FAILED:
            return {
                ...state, isLoading: false, errMes: action.payload
            }
        default:
            return state
    }       
}
