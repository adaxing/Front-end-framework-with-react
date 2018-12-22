import { DISHES } from '../components/SharedComponent/Dish';
import { COMMENTS } from '../components/SharedComponent/Comments';
import { LEADERS } from '../components/SharedComponent/Leaders';
import { PROMOTIONS } from '../components/SharedComponent/Promotions';


export const InitialStore = {
    dishes : DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
}

export const Reducer = (store = InitialStore, action) => {
    return store
}