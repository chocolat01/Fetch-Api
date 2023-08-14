import { NgModule, importProvidersFrom, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule ,HTTP_INTERCEPTORS } from '@angular/common/http';

import { ExercisePhysiqueRoutingModule } from './exercise-physique-routing.module';
import { ExerciceService } from 'src/app/services/exercice.service';
import { AuthInterceptorInterceptor } from 'src/app/interceptors/auth-interceptor.interceptor';
import { BicepsComponent } from './biceps/biceps.component';


@NgModule({
  declarations: [
    BicepsComponent
  ],
   imports: [
    CommonModule,
    ExercisePhysiqueRoutingModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptorInterceptor ,
      multi:true,
    },ExerciceService
  ],
  
 

})
export class ExercisePhysiqueModule { }
