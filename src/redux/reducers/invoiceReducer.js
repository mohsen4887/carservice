import {ADD_NEW_INVOICE, CLEAR_INVOICES} from '../actions/types';

const defaultValue = [];
export default invoices = (state = defaultValue, action) => {
  switch (action.type) {
    case ADD_NEW_INVOICE: {
      if (action.payload) {
        return [...state, action.payload];
      }
    }
    case CLEAR_INVOICES: {
      return [];
    }
  }
  return state;
};
