import { Component, OnInit } from '@angular/core';

import { faStar } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-customerreview',
  templateUrl: './customerreview.component.html',
  styleUrls: ['./customerreview.component.css']
})
export class CustomerreviewComponent implements OnInit {

  faStar = faStar

  constructor() { }

  ngOnInit(): void {
  }

}
