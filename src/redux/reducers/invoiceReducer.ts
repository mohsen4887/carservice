import {ADD_NEW_INVOICE, CLEAR_INVOICES} from '../actions/types';

const defaultValue = [];
const invoices = (state = defaultValue, action) => {
  switch (action.type) {
    case ADD_NEW_INVOICE: {
      if (action.invoice) {
        return [...state, action.invoice];
      }
    }
    case CLEAR_INVOICES: {
      return [];
    }
  }
  return state;
};
export default invoices;
