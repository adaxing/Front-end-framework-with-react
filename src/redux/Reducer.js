import { DISHES } from '../components/SharedComponent/Dish';
import { COMMENTS } from '../components/SharedComponent/Comments';
import { LEADERS } from '../components/SharedComponent/Leaders';
import { PROMOTIONS } from '../components/SharedComponent/Promotions';


export const initialState = {
    dishes : DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
}

export const Reducer = (state = initialState, action) => {
    return state
}