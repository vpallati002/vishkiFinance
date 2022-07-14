import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { ToastModule } from 'primeng/toast';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LookupService } from './services/lookup.service';
import { UtilityService } from './services/utility.service';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MenubarModule,
    BrowserModule,
    ToastModule,
    ReactiveFormsModule,
    FormsModule,
    DropdownModule,
    BrowserAnimationsModule
  ],
  declarations: [ FooterComponent, HeaderComponent ],
  exports: [
    FooterComponent,
    HeaderComponent,
    HttpClientModule,
    MenubarModule,
    BrowserModule,
    ToastModule,
    ReactiveFormsModule,
    FormsModule,
    DropdownModule,
    BrowserAnimationsModule
  ],
  providers: [HttpClient, UtilityService, LookupService, MessageService],
})
export class SharedModule {}
