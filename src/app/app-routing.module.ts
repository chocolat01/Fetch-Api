import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BicepsComponent } from './module/exercise-physique/biceps/biceps.component';
import { AppComponent } from './app.component';
import { LoadingPageComponent } from './loading-page/loading-page.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./module/exercise-physique/exercise-physique-routing.module').then(
        (m) => m.ExercisePhysiqueRoutingModule
      ),
    
  },
  { path: 'loading', component: LoadingPageComponent },
  { path: 'biceps', component: BicepsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}