import * as actionEvents from './events';
import { delay } from '../helpers/index';

const setLoadingAndSubmitted = (isLoading) => {
  return {
    type: actionEvents.SET_LOADING_AND_SUBMITTED,
    payload: isLoading
  };
};

const setLoadingAndData = (data) => {
  return {
    type: actionEvents.SET_LOADING_AND_DATA,
    payload: data
  };
};

const submitData = (data) => {
  return function (dispatch) {
    dispatch(setLoadingAndData({isLoading: true, formData: data, isSubmitted: false}));
    delay(5000, false).then((result) => {
      dispatch(setLoadingAndSubmitted({isLoading: result, isSubmitted: true}));
    });
  };
};

export {
  setLoadingAndSubmitted,
  submitData
};