import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalController } from '@ionic/angular';
import { AngularDelegate } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Css1ComponentComponent } from './css1-component/css1-component.component';
import { Css2ComponentComponent } from './css2-component/css2-component.component';
import { Modal1Component } from './modal1/modal1.component';

@NgModule({
  declarations: [
    AppComponent,
    Css1ComponentComponent,
    Css2ComponentComponent,
    Modal1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ModalController,
    AngularDelegate
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
