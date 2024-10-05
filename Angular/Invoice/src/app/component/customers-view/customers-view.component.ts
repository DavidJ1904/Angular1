import { Component, Input } from '@angular/core';
import { customers } from '../../model/customers';

@Component({
  selector: 'customers-view',
  standalone: true,
  imports: [],
  templateUrl: './customers-view.component.html',
})
export class CustomersViewComponent {
  @Input()customers!:customers
}
