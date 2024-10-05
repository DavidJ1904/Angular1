import { Component, Input } from '@angular/core';
import { invoiceItem } from '../../model/invoiceItem';
import { InvoiceItemComponent } from "../invoice-item/invoice-item.component";

@Component({
  selector: 'invoice-detail',
  standalone: true,
  imports: [InvoiceItemComponent],
  templateUrl: './invoice-detail.component.html',
})
export class InvoiceDetailComponent {
  @Input()items!:invoiceItem[]
}
