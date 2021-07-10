import {Invoice} from '../../models/Invoice';
import {ADD_NEW_INVOICE, CLEAR_INVOICES, INIT} from './types';

export const init = data => ({
  type: INIT,
  payload: data,
});

export const addNewInvoice = (invoice: Invoice) => ({
  type: ADD_NEW_INVOICE,
  invoice,
});

export const clearInvoices = data => ({
  type: CLEAR_INVOICES,
});
