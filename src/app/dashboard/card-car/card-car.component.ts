import {Component, Input} from '@angular/core';
import {Car} from 'src/app/interfaces/car';

@Component({
  selector: 'app-card-car',
  templateUrl: './card-car.component.html',
  styleUrls: ['./card-car.component.css']
})
export class CardCarComponent {

  @Input() public car: Car;

  constructor() { }
}
