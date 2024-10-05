import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../service/invoice.service';
import { Invoice } from '../../model/invoice';
import { CompanyViewComponent } from "../../componets/company-view/company-view.component";
import { CustomersViewComponent } from "../../component/customers-view/customers-view.component";
import { InvoiceDetailComponent } from "../invoice-detail/invoice-detail.component";

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [CompanyViewComponent, CustomersViewComponent, InvoiceDetailComponent],
  templateUrl: './invoice.component.html',
})
export class InvoiceComponent implements OnInit {

  invoice!:Invoice;

  constructor(private service:InvoiceService){}

  ngOnInit(): void {
    this.invoice=this.service.getInvoice();
  }


}
