import {createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Etudiants } from './Etudiants';
import { Cours } from './cours';
import { Professeurs } from './Professeurs';
import { Images } from './Images';
import {RechercheCours} from "./ResultatRecherche";
import { Subscription } from './Subscription';
import { InitialUserRegister,InitialCours,InitialUserLogin, KeywordForm } from './forms';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            etudiants: Etudiants,
            cours: Cours,
            resultatRechercheCours: RechercheCours,
            professeurs: Professeurs,
            images: Images,
            subscription: Subscription,
            ...createForms({
                user: InitialUserRegister,
                login: InitialUserLogin,
                course: InitialCours,
                keyword: KeywordForm
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}