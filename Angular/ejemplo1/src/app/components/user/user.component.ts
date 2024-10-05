import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
})
export class UserComponent {
  name:string='David';
  age:number=20
}
