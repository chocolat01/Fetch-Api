import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BicepsComponent } from './biceps/biceps.component';

const routes: Routes = [{
  path:'',
  component:BicepsComponent,
  title:'Biceps exercises'

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExercisePhysiqueRoutingModule { }
