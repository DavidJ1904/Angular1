import { Component, Input } from '@angular/core';
import { invoiceItem } from '../../model/invoiceItem';

@Component({
  selector: 'tr[invoice-item]',
  standalone: true,
  imports: [],
  templateUrl: './invoice-item.component.html',
})
export class InvoiceItemComponent {
  @Input()item!:invoiceItem
}
