import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AddItemComponent } from './add-item/add-item.component';
import { InventoryCounterComponent } from './inventory/inventory-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent,
    InventoryCounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
