import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { TrackbyComponent } from './trackby/trackby.component';
import { NestedarrayComponent } from './nestedarray/nestedarray.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SiblingOneComponent } from './sibling-one/sibling-one.component';
import { SiblingTwoComponent } from './sibling-two/sibling-two.component';
import { ServiceService } from './services/service.service';
import { CartHeaderComponent } from './cart-header/cart-header.component';
import { CartBodyComponent } from './cart-body/cart-body.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    TrackbyComponent,
    NestedarrayComponent,
    SiblingOneComponent,
    SiblingTwoComponent,
    CartHeaderComponent,
    CartBodyComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [ServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
