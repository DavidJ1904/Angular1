import { Injectable } from '@angular/core';
import { Invoice } from '../model/invoice';
import { invoiceData } from '../model/data/invoice.data';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private invoice:Invoice=invoiceData;
  constructor() { }

  getInvoice():Invoice{
    return this.invoice;
  }
}
