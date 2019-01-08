import * as ActionTypes from './ActionType';
import { baseUrl } from '../components/SharedComponent/baseUrl';

// normal action creator returns action

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
    dispatch(dishLoading());

    return fetch(baseUrl+'dishes') 
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)))
}

// Comment

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
export const fetchComments = () => (dispatch) => {    
    return fetch(baseUrl+'comments') 
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
}
export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
}) 
export const commentFailed = (errMes) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errMes
})

// Promotion
export const fetchPromos = () => (dispatch) => {
    dispatch(promoLoading());
    return fetch(baseUrl+'promotions')
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)))
}

export const promoLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
})
export const addPromos = (promotions) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promotions
})
export const promoFaild = (errMes) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errMes
})