import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {  FormControl } from '@angular/forms';
import { FormGroup, FormArray, FormBuilder,
    Validators  } from '@angular/forms';
import{Rhservice}from '../../rhservice.service';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { from } from 'rxjs';
@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss'],
    animations: [routerTransition()]
})
export class GridComponent implements OnInit {
    departementForm = new FormGroup({
        entreprise: new FormControl(''),
        departementName: new FormControl(''),
    });
    datas :any ;
    constructor(private apiser : Rhservice) {}

    ngOnInit() {return this.apiser.getentrp().subscribe(res => {
        console.log (res);
       this.datas = res ;
       
      });}
      onSubmit() {
        // TODO: Use EventEmitter with form value
        console.warn(this.departementForm.value);
      }
}
