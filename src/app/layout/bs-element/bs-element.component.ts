import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

import {  FormControl } from '@angular/forms';
import { FormGroup, FormArray, FormBuilder,
    Validators  } from '@angular/forms';
import{Rhservice}from '../../rhservice.service';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { from } from 'rxjs';
@Component({
    selector: 'app-bs-element',
    templateUrl: './bs-element.component.html',
    styleUrls: ['./bs-element.component.scss'],
    animations: [routerTransition()]
})
export class BsElementComponent implements OnInit {

    entrepriseForm = new FormGroup({
        entrepriseName: new FormControl(''),
        entrepriseRaison: new FormControl(''),
        Logo: new FormControl(''),
       
    });
    constructor() {}

    ngOnInit() {}
    onSubmit() {
        // TODO: Use EventEmitter with form value
        console.warn(this.entrepriseForm.value);
      }
}
