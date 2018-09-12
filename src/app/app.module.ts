import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { ToolbarmenuComponent } from './toolbarmenu/toolbarmenu.component';
import { AppRoutingModule } from './/app-routing.module';
import { SearchpageComponent } from './searchpage/searchpage.component';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { AppMaterialModule } from './app-material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../app/shared/search.service';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ToolbarmenuComponent,
    SearchpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    AppMaterialModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
