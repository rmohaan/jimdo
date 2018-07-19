import * as actionEvents from '../actions/events';

const data = (state, action) => {
  let actionType = action.type,
    newState = Object.assign({}, state);

  if (actionType === actionEvents.SET_LOADING_AND_DATA) {
    newState = action.payload.formData;
  }
  return newState;
};

const isLoading = (state, action) => {
  let actionType = action.type,
    newState = state ? state : false;
    
  if (actionType === actionEvents.SET_LOADING_AND_SUBMITTED) {
    newState = action.payload.isLoading;
  }

  if (actionType === actionEvents.SET_LOADING_AND_DATA) {
    newState = action.payload.isLoading;
  }
  return newState;
};

const isSubmitted = (state, action) => {
  let actionType = action.type,
    newState = state ? state : false;

  if (actionType === actionEvents.SET_LOADING_AND_DATA) {
    newState = action.payload.isSubmitted;
  }

  if (actionType === actionEvents.SET_LOADING_AND_SUBMITTED) {
    newState = action.payload.isSubmitted;
  }
  return newState;
};

export {
  data,
  isLoading,
  isSubmitted
};