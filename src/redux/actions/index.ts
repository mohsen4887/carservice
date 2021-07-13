import {Invoice} from '../../models/Invoice';
import {ADD_NEW_INVOICE, CLEAR_INVOICES, INIT, REMOVE_INVOICE} from './types';
import {guid} from '../../utils/helper';

export const init = data => ({
  type: INIT,
  payload: data,
});

export const addNewInvoice = (invoice: Invoice) => ({
  type: ADD_NEW_INVOICE,
  invoice: {
    id: guid(),
    ...invoice,
  },
});

export const removeInvoice = (invoice: Invoice) => ({
  type: REMOVE_INVOICE,
  invoice,
});

export const clearInvoices = () => ({
  type: CLEAR_INVOICES,
});
