import * as ActionTypes from './ActionType';

export const Feedbacks = (state={
        errMes:null,
        feedbacks:[]
    }
    , action) => {
    switch(action.type){
        case ActionTypes.ADD_FEEDBACK:
            var feedback = action.payload
            return {
                ...state, isLoading: false, errMes: null, comments:state.feedbacks.concat(feedback)
            }
        default:
            return state
    }       
}
