import * as ActionTypes from './ActionTypes';

export const RechercheCours = (state = { errMess: null,isLoading: true, resultatRechercheCours: [] }, action) => {
  switch (action.type) {
    
    case ActionTypes.ADD_COURSE_BY_KEY:
        return { ...state, isLoading: false, errMess: null, resultatRechercheCours: action.payload };

    case ActionTypes.LOADING_COURSE_BY_KEY:
      return { ...state, isLoading: true, errMess: null, resultatRechercheCours: [] }

    case ActionTypes.FAILED_COURSE_BY_KEY:
      return { ...state, isLoading: false, errMess: action.payload };
    default:
      return state;
  }
};