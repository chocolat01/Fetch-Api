import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorInterceptor } from './interceptors/auth-interceptor.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExerciceService } from './services/exercice.service';
import { ExercisePhysiqueModule } from './module/exercise-physique/exercise-physique.module';
import { ExerciseState } from './states/exercise.state';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxsModule.forRoot([ExerciseState]), // Enregistrement global de ExerciseState
    ExercisePhysiqueModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorInterceptor,
      multi: true,
    },
    ExerciceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }