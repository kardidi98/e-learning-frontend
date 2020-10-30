import * as ActionTypes from './ActionTypes';

export const Professeurs = (state = { errMess: null,isLoading: true, professeurs:[]}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_PROF:
        return {...state, isLoading: false, errMess: null, professeurs: action.payload};

    case ActionTypes.LOADING_PROF:
        return {...state, isLoading: true, errMess: null, professeurs: []}

    case ActionTypes.FAILED_PROF:
        return {...state, isLoading: false, errMess: action.payload};
    default:
      return state;
  }
};