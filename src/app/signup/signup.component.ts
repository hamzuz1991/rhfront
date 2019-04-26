import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

import { from, observable } from 'rxjs';
@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    data :any;
    constructor() {}

    ngOnInit(){
      
    }

}
