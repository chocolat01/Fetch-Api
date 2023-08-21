import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ExercisePhysiqueRoutingModule } from './exercise-physique-routing.module';
import { ExerciceService } from 'src/app/services/exercice.service';
import { AuthInterceptorInterceptor } from 'src/app/interceptors/auth-interceptor.interceptor';
import { BicepsComponent } from './biceps/biceps.component';
import { NgxsModule } from '@ngxs/store';
import { ExerciseState } from 'src/app/states/exercise.state';
@NgModule({
  declarations: [
    BicepsComponent
  ],
  imports: [
    CommonModule,
    ExercisePhysiqueRoutingModule,
    HttpClientModule,
    NgxsModule.forFeature([ExerciseState]) // Ajoutez ExerciseState à la liste des fonctionnalités
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorInterceptor,
      multi: true,
    },
    ExerciceService
  ]
})
export class ExercisePhysiqueModule { }