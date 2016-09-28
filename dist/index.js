"use strict";
import React from 'react';
import {render} from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {combineReducers} from 'redux-immutable'
import createLogger from 'redux-logger'
import {fromJS} from 'immutable'
import createSagaMiddleware from 'redux-saga'
import {Provider} from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import dataPending from './reducers/data-pending-reducer'
import notifications from './reducers/notifications-reducer'
import items from './reducers/items-reducer'
import rootSaga from './sagas/root-saga'
import App from './components/App'

// const CONTENT_ROW_LENGTH = 5;
// const DUMMY_CONTENT_ARR = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget tincidunt arcu, sed egestas nibh. Nunc eu odio volutpat, tempus elit id, tristique tortor. Integer consectetur suscipit tellus. Vivamus at lectus non lacus porttitor scelerisque ac vitae urna. Vivamus et consectetur mauris. Etiam placerat sollicitudin enim, ac egestas lectus. Ut."
//     .split(" ");
// const DUMMY_CONTENT_MULTIARR = [];
// for (let i = 0; i < DUMMY_CONTENT_ARR.length / CONTENT_ROW_LENGTH; i++) DUMMY_CONTENT_MULTIARR.push(DUMMY_CONTENT_ARR.slice(i * CONTENT_ROW_LENGTH, i * CONTENT_ROW_LENGTH + CONTENT_ROW_LENGTH))

/** combine reducers */
const reducer = combineReducers({
    items,
    notifications,
    dataPending,
});

/** create initial state */
const initialState = fromJS({
    items: [],
    notifications: [],
    dataPending: {
        openedConnectionsAmount: 0
    }
});

/** create the saga middleware */
const sagaMiddleware = createSagaMiddleware();

/**
 * Create store
 * init it by initial formFields,
 * enhance by middleware - sagas and logger
 */
const store = createStore(reducer, initialState, applyMiddleware(sagaMiddleware, createLogger()));

/** run root saga */
sagaMiddleware.run(rootSaga);

render(
    <MuiThemeProvider>
        <Provider store={store}>
            <App/>
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('app-root')
);
