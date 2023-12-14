import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InnerComponent } from './inner/inner.component';


const routes: Routes = [
  {path: "",component:HomeComponent},
  {path: "inner",component:InnerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
