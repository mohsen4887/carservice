import {
  ADD_NEW_INVOICE,
  CLEAR_INVOICES,
  REMOVE_INVOICE,
  UPDATE_INVOICE,
} from '../actions/types';

const defaultValue = [];
const invoices = (state = defaultValue, action) => {
  switch (action.type) {
    case ADD_NEW_INVOICE: {
      if (action.invoice) {
        return [...state, action.invoice];
      }
    }
    case UPDATE_INVOICE: {
      if (action.invoice) {
        const index = state.findIndex(item => item.id == action.invoice.id);
        console.log('UPDATE_INVOICE', index);
        if (index >= 0) {
          console.log(state[index]);
          state[index] = action.invoice;
          return [...state];
        }
      }
      return state;
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
