import {TOGGLE_COLOR} from '../constants/Constants';

/** Toggle the hello world color */
export function toggleColor(color) {
    return {type: TOGGLE_COLOR, color};
}