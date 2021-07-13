import {
  ADD_NEW_INVOICE,
  CLEAR_INVOICES,
  REMOVE_INVOICE,
} from '../actions/types';

const defaultValue = [];
const invoices = (state = defaultValue, action) => {
  switch (action.type) {
    case ADD_NEW_INVOICE: {
      if (action.invoice) {
        return [...state, action.invoice];
      }
    }
    case REMOVE_INVOICE: {
      if (action.invoice) {
        return state.filter(item => {
          return item.id != action.invoice.id;
        });
      }
      return state;
    }
    case CLEAR_INVOICES: {
      return defaultValue;
    }
  }
  return state;
};
export default invoices;
