import * as ActionTypes from './ActionTypes';

export const Cours = (state = { errMess: null,isLoading: true, cours: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COURSE:
      return { ...state, isLoading: false, errMess: null, cours: action.payload };

    case ActionTypes.LOADING_COURSE:
      return { ...state, isLoading: true, errMess: null, cours: [] }

    case ActionTypes.FAILED_COURSE:
      return { ...state, isLoading: false, errMess: action.payload };
    default:
      return state;
  }
};