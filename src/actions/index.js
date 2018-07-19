import * as actionEvents from './events';
import { delay } from '../helpers/index';

const setData = (data) => {
  return {
    type: actionEvents.SET_DATA,
    payload: data
  };
};

const setLoading = (isLoading) => {
  return {
    type: actionEvents.SET_IS_LOADING,
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
    dispatch(setLoadingAndData({isLoading: true, formData: data}));
    delay(5000, false).then((result) => {
      dispatch(setLoading(result));
    });
  };
};

export {
  setData,
  setLoading,
  submitData
};