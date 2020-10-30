import * as ActionTypes from './ActionTypes';

export const Etudiants = (state = { errMess: null,isLoading: true, etudiants:[]}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_ETUDIANT:
        return {...state, isLoading: false, errMess: null, etudiants: action.payload};

    case ActionTypes.LOADING_ETUDIANT:
        return {...state, isLoading: true, errMess: null, etudiants: []}

    case ActionTypes.FAILED_ETUDIANT:
        return {...state, isLoading: false, errMess: action.payload};
    default:
      return state;
  }
};