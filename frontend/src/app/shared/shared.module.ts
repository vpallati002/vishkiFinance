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

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MenubarModule,
    BrowserModule,
    ToastModule,
    ReactiveFormsModule,
    FormsModule,
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
  ],
  providers: [HttpClient, UtilityService, LookupService, MessageService],
})
export class SharedModule {}
