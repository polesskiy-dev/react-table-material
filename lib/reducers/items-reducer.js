import {fromJS} from 'immutable'
import * as types from '../constants/action-types'

/**
 * Items reducer
 *
 * @param items - items List
 * @param action
 * @returns state
 */
const items = (items, action) => {
    switch (action.type) {
        case types.GET_ITEMS_SUCCESS:
            return fromJS(action.payload);

        /** default */
        default:
            return items;
    }
};

export default items

