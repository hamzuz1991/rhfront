import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { FormControl } from '@angular/forms';
import {
    FormGroup, FormArray, FormBuilder,
    Validators
} from '@angular/forms';
import { Rhservice } from '../../rhservice.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { from } from 'rxjs';
import { filterQueryId } from '@angular/core/src/view/util';
import { stringify } from '@angular/core/src/render3/util';



@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    animations: [routerTransition()]
})
export class FormComponent implements OnInit {
    emplyerForm = new FormGroup({
        firstName: new FormControl(''),
        LastName: new FormControl(''),
        Email: new FormControl(''),
        Numtel: new FormControl(''),
        Etat: new FormControl(''),
        photo: new FormControl(''),
        ROLE: new FormControl(''),
    });
    affectationdepForm = new FormGroup({
        departement: new FormControl(''),
    });
    affectationenterpForm = new FormGroup({
        val: new FormControl(''),
    });

    datas: any;
    datas1: any;
    url: any;
 public userfile :any = File ;
    constructor(private apiser: Rhservice,  private formBuilder: FormBuilder) {
    }
    


  
    processFile(event) {
      const file= event.target.files[0];
      console.log(file);
      this.userfile =file;    //   const reader = new FileReader();
      console.log( this.userfile);
    //   reader.addEventListener('load', (event: any) => {
  
    //     this.selectedFile = new ImageSnippet(event.target.result, file);
  
    //     this.imageService.uploadImage(this.selectedFile.file).subscribe(
    //       (res) => {
          
    //       },
    //       (err) => {
          
    //       })
    //   });
  
    //   reader.readAsDataURL(file);
    }
  

    ngOnInit() {


        return this.apiser.getentrp().subscribe(res => {
            console.log(res);
            this.datas = res;

        });
    }
    
    
    onSubmit1(a) {
        console.log(this.affectationenterpForm.value);
        a = Number(this.affectationenterpForm.controls.val.value);
        console.log(a);
        return this.apiser.getalldep(a).subscribe(res => {
            console.log(res);
            this.datas1 = res;
        });
    }
    onSubmit() {
        if (this.emplyerForm.valid){
const user  =this.emplyerForm.value ;
console.log(user);
const formData  = new FormData();
formData.append('user',JSON.stringify(user))
formData.append('file',this.userfile);

console.log(formData);

} else
{console.error("incorrect");
}
    }
}

