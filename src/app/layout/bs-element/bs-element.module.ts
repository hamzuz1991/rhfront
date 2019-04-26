import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { BsElementRoutingModule } from './bs-element-routing.module';
import { BsElementComponent } from './bs-element.component';
import { PageHeaderModule } from './../../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [CommonModule, BsElementRoutingModule, PageHeaderModule, NgbModule,CommonModule,  PageHeaderModule , ReactiveFormsModule],
    declarations: [BsElementComponent]
})
export class BsElementModule {}
