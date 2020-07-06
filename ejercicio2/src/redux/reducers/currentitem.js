import items from '../../data/items'
import { type as findCurrentItem } from '../actions/findCurrentItem'

const defaultState = {};

function reducer(state = defaultState ,{type , payload}) {
    switch (type) {
        case findCurrentItem :{
            return items.find(n=>n.id === payload )
        }
        default:
            return state;
    }
}

export default reducer;