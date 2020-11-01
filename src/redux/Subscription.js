import * as ActionTypes from './ActionTypes';

export const Subscription = (state = { errMess: null,isLoading: true, subscription: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_SUBSCRIBE:
      return { ...state, isLoading: false, errMess: null, subscription: action.payload };

    case ActionTypes.LOADING_SUBSCRIBE:
      return { ...state, isLoading: true, errMess: null, subscription: [] }

    case ActionTypes.FAILED_SUBSCRIBE:
      return { ...state, isLoading: false, errMess: action.payload };
    default:
      return state;
  }
};