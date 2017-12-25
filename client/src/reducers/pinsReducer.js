import {
  CREATE_PIN,
  FETCH_PINS,
  EDIT_PIN,
  DELETE_PIN
} from '../actions/types';
import _ from 'lodash';

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_PIN:
      return [ { ...action.payload }, ...state ];
    case EDIT_PIN:
      return [ { ...action.payload }, ...state.filter(p => p._id !== action.payload._id) ]
    case DELETE_PIN:
      return [...state.filter(p => p._id !== action.payload) ];
    case FETCH_PINS:
      return [ ...action.payload ];
    default:
      return state;
  }
}
