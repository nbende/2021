import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComplaintComponent } from './Masters/complaint/complaint.component';
import { PopupComponent } from './Masters/popup/popup.component';
import { RabbitmqComponent } from './Masters/rabbitmq/rabbitmq.component';


@NgModule({
  declarations: [
    AppComponent,
    ComplaintComponent,
    PopupComponent,
   RabbitmqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
