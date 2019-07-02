import {Component, OnInit, ViewChildren} from '@angular/core';
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
  public image: string | ArrayBuffer;
  @ViewChildren('file') public file: Event;

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

  public changeListener($event: Event): void {

    this.readThis($event.target);
  }

  public readThis(inputValue: any): void {
    const file: File = inputValue.files[0];
    const myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {

      this.image = myReader.result;
    };

    myReader.readAsDataURL(file);
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

    if (this.image) {

      car.image = this.image.toString();
    }

    this.carService.setCar(car).then((carResponse: Car) => {

      this.router.navigate(['./dashboard/list']);
    });
  }
}
