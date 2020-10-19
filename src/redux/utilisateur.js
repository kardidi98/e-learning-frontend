import * as ActionTypes from './ActionTypes';

export const Etudiants = (state = { errMess: null, etudiants:[]}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_USER:
      return {...state, errMess: null, etudiants: action.payload};
    case ActionTypes.FAILED_USER:
      return {...state, errMess: action.payload, etudiants: []};
    default:
      return state;
  }
};