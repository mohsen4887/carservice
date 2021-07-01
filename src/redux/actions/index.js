import {ADD_NEW_INVOICE, CLEAR_INVOICES, INIT} from './types';

export const init = data => ({
  type: INIT,
  payload: data,
});

export const addNewInvoice = data => ({
  type: ADD_NEW_INVOICE,
  payload: data,
});

export const clearInvoices = data => ({
  type: CLEAR_INVOICES,
});
