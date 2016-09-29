import {createAction} from 'redux-actions';
import * as types from '../constants/action-types'

/** data pending */
export const dataPendingStart = createAction(types.DATA_PENDING_START);
export const dataPendingFinished = createAction(types.DATA_PENDING_FINISHED);

/** get items */
export const getItemsStart = createAction(types.GET_ITEMS_START);
export const getItemsSuccess = createAction(types.GET_ITEMS_SUCCESS);
export const getItemsFailure = createAction(types.GET_ITEMS_FAILURE);

/** post items */
export const postItemsStart = createAction(types.POST_ITEMS_START);
export const postItemsSuccess = createAction(types.POST_ITEMS_SUCCESS);
export const postItemsFailure = createAction(types.POST_ITEMS_FAILURE);