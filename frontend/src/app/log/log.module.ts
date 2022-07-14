import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogComponent } from './log.component';
import { HttpTokenService } from '../shared/services/http-token.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';


@NgModule({
  imports: [ CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    DropdownModule,
    CalendarModule,
    InputNumberModule,
    InputTextareaModule,
    ButtonModule,
    DialogModule
  ],
  declarations: [LogComponent],
  providers: [HttpTokenService],
})
export class LogModule { }
