import * as actionEvents from '../actions/events';

const data = (state, action) => {
  let actionType = action.type,
    newState = Object.assign({}, state);

  if (actionType === actionEvents.SET_DATA) {
    newState = action.payload;
  }

  if (actionType === actionEvents.SET_LOADING_AND_DATA) {
    newState = action.payload.formData;
  }
  return newState;
}

const allowUserInteraction = (state, action) => {
  let actionType = action.type,
    newState = state ? state : true;

  if (actionType === actionEvents.SET_ALLOW_USER_INTERACTION) {
    newState = action.payload;
  }
  return newState;
}

const isLoading = (state, action) => {
    let actionType = action.type,
      newState = state ? state : false;
    
    if (actionType === actionEvents.SET_IS_LOADING) {
      newState = action.payload;
    }

    if (actionType === actionEvents.SET_LOADING_AND_DATA) {
      newState = action.payload.isLoading;
    }
    return newState;
}

export {
  data,
  allowUserInteraction,
  isLoading
}