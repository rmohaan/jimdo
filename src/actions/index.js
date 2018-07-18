import * as actionEvents from './events';

export function setData (data) {
  return {
    type: actionEvents.SET_DATA,
    payload: data
  };
}

export function fetchData (data) {
  return {
    type: actionEvents.SET_DATA,
    payload: data
  };
}

export function setLoading (isLoading) {
  return {
    type: actionEvents.SET_IS_LOADING,
    payload: isLoading
  };
}

export function submitData () {
  return function (dispatch) {
    dispatch(setLoading(true));
    setTimeout(() => {console.log('set timeout setting loading to false'); dispatch(setLoading(false));}, 5000);
  };
}