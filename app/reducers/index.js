import assign from 'object-assign';
import {COLOR_TOGGLED} from '../constants/Constants';

const initialState = {
    color: 'red',
    data: {
        loading: false,
        objects: [],
    },
};

export default function reduce(state = initialState, action) {
    switch (action.type) {
        case COLOR_TOGGLED:
            return assign({}, state, {
                color: action.color
            });

        default:
            return state;
    }
}
