import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Car} from 'src/app/interfaces/car';
import {Rent} from 'src/app/interfaces/rent';
import {CarService} from 'src/app/providers/car/car.service';
import {RentService} from 'src/app/providers/rent/rent.service';
import {UserService} from 'src/app/providers/user/user.service';

@Component({
  selector: 'app-rent-car',
  templateUrl: './rent-car.component.html',
  styleUrls: ['./rent-car.component.css']
})
export class RentCarComponent implements OnInit {

  public rentCarForm: FormGroup;
  public consultCar: Car;
  public rentReponse: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private params: ActivatedRoute,
    private carService: CarService,
    private userService: UserService,
    private rentService: RentService
  ) { }

  ngOnInit() {

    this.params.queryParams.subscribe((params: { carId: string }) => {

      this.carService.getByKey(params.carId).subscribe((consultCar: Car) => {

        this.consultCar = consultCar;
        this.rentCarForm.controls['carId'].setValue(consultCar.carId);
      });
    });
    
    this.initForm();
  }

  private initForm(): void{

    this.rentCarForm = this.formBuilder.group({

      userId: new FormControl(this.userService.getLoggedUser().idUser),
      carId: new FormControl(''),
      retirementPlace: new FormControl('', Validators.required),
      retirementHour: new FormControl('', Validators.required),
      sameRetirementPlace: new FormControl(false, Validators.required),
      returnPlace: new FormControl('', Validators.required),
      returnHour: new FormControl('', Validators.required)
    });
  }

  public onSubmit(): void {

    const rent: Rent = {
      userId: this.rentCarForm.controls['userId'].value,
      carId: this.rentCarForm.controls['carId'].value,
      retirementPlace: this.rentCarForm.controls['retirementPlace'].value,
      retirementHour: this.rentCarForm.controls['retirementHour'].value,
      sameRetirementPlace: this.rentCarForm.controls['sameRetirementPlace'].value,
      returnPlace: this.rentCarForm.controls['returnPlace'].value,
      returnHour: this.rentCarForm.controls['returnHour'].value
    };

    this.rentService.createRent(rent).then(() => {

      this.consultCar.status = 'rented';


      this.carService.updateCar(this.consultCar).then(() => {

        this.rentReponse = true;
      });

    })
  }
}
