import {Customer} from './Customer';
import {InvoiceInfo} from './InvoiceInfo';
import {Item} from './Item';
import {VehicleInfo} from './VehicleInfo';

export class Invoice {
  id: string;
  customer: Customer;
  invoice_info: InvoiceInfo;
  vehicle_info: VehicleInfo;
  items: Item[];
}
