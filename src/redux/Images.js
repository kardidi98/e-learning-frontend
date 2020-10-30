import * as ActionTypes from './ActionTypes';

export const Images = (state = { errMess: null,isLoading: true, images:[]}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_IMAGE:
        return {...state, isLoading: false, errMess: null, images: action.payload};

    case ActionTypes.LOADING_IMAGE:
        return {...state, isLoading: true, errMess: null, images: []}

    case ActionTypes.FAILED_IMAGE:
        return {...state, isLoading: false, errMess: action.payload};
    default:
      return state;
  }
};