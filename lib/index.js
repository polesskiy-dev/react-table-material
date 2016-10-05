"use strict";
import React from 'react';
//import {render} from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {combineReducers} from 'redux-immutable'
import createLogger from 'redux-logger'
import {fromJS} from 'immutable'
import createSagaMiddleware from 'redux-saga'
import {Provider} from 'react-redux'

import dataPending from './reducers/data-pending-reducer'
import notifications from './reducers/notifications-reducer'
import items from './reducers/items-reducer'
import rootSaga from './sagas/root-saga'
import App from './components/App'

const ExampleTable = (props) => {
    props;
    /** combine reducers */
    const reducer = combineReducers({
        items,
        notifications,
        dataPending,
    });

    /** create initial state */
    const initialState = fromJS({
        items: {
            rows: [[]],
            columnNames: []
        },
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

    return <Provider store={store}>
          <App/>
          </Provider>   
}

export default ExampleTable
