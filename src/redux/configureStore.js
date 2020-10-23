import {createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Etudiants } from './utilisateur';
import { InitialUserRegister,InitialCours,InitialUserLogin } from './forms';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            etudiants: Etudiants,
            ...createForms({
                user: InitialUserRegister,
                login: InitialUserLogin,
                cours: InitialCours
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}