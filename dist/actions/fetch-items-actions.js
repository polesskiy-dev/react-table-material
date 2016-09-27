import {createAction} from 'redux-actions';
import * as types from '../constants/action-types'

export const getItemsStart = createAction(types.GET_ITEMS_START);
export const postItemsStart = createAction(types.POST_ITEMS_START);