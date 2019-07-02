import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {CarService} from 'src/app/providers/car/car.service';
import {Car} from '../../interfaces/car';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {

  public createForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private carService: CarService,
    private router: Router
  ) {}

  public ngOnInit(): void {

    this.createForm = this.formBuilder.group({
      model: new FormControl('', Validators.compose([
        Validators.required
      ])),
      year: new FormControl('', Validators.required),

      enrollment: new FormControl('', Validators.required),

      color: new FormControl('', Validators.required),

      brand: new FormControl('', Validators.required),

      status: new FormControl('')
    });
  }

  public onSubmit(): void {

    const car: Car = {
      model: this.createForm.controls['model'].value,
      year: this.createForm.controls['year'].value,
      enrollment: this.createForm.controls['enrollment'].value,
      color: this.createForm.controls['color'].value,
      brand: this.createForm.controls['brand'].value,
      status: 'available'
    };

    this.carService.setCar(car).then((carResponse: Car) => {

      this.router.navigate(['./dashboard/list']);
    });
  }
}
