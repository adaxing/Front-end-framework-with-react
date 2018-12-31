import * as ActionTypes from './ActionType';
import { DISHES } from '../components/SharedComponent/Dish';

// normal action creator returns action

// addComment action
export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
}) 
// addDish action
export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
}) 
// dishloading action
export const dishLoading = () => ({
    type: ActionTypes.DISHES_LOADING
})
// dishfailed action
export const dishFailed = (errMes) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errMes
})

// redux-thunk as middleware to return a function instead of action
// thunk can delay the dispatch action or dispatch only certain condition met
// inner function receives the store methods dispatch and getState as parameters

export const fetchDishes = () => (dispatch) => {
    dispatch(dishLoading(true));
    setTimeout( ()=>{
        dispatch(addDishes(DISHES))
    }, 2000)
}