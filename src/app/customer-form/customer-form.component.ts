import { Component } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent {

  cities = ['Atlanta', 'Boston', 'Milwaukee', 'New York'];
  states = ['Alabama', 'Alaska', 'Connecticut', 'California', 'Georgia', 'Massachusetts', 'Wisconsin', 'New York'];

  model = new Customer('John', 'Doe', '000 Cambridge Place', this.cities[1], this.states[1], '000000');

  submitted = false;

  newCustomer() {
    this.model = new Customer('', '', '', '', '', '')
  }

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}
