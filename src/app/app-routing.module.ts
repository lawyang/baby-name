import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ToolbarmenuComponent } from '../app/toolbarmenu/toolbarmenu.component';
import { LandingComponent } from '../app/landing/landing.component';
import { SearchpageComponent } from '../app/searchpage/searchpage.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'searchpage', component: SearchpageComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
