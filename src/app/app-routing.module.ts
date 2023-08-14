import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BicepsComponent } from './module/exercise-physique/biceps/biceps.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./module/exercise-physique/exercise-physique-routing.module').then(
        (m) => m.ExercisePhysiqueRoutingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}