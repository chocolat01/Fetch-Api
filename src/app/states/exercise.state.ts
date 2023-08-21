// exercise.state.ts
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { catchError, tap } from 'rxjs/operators';
import { Exercise } from '../models/exercise.model';
import { HttpClient } from '@angular/common/http';
//import { FetchExercises } from './exercise.actions';
import { FetchExercises } from './exercise.actions';
import { ExerciceService } from '../services/exercice.service';
import { Injectable } from '@angular/core';

export interface ExerciseStateModel {
exercises: Exercise[];
}

@State<ExerciseStateModel>({
name: 'exercise',
defaults: {
exercises: []
}
})

@Injectable()

export class ExerciseState {
constructor(private http: HttpClient , private service:ExerciceService) {}

@Selector()
static getExercises(state: ExerciseStateModel) :Exercise[] {
return state.exercises;
}

@Action(FetchExercises)
fetchExercises(ctx: StateContext<any>, action: FetchExercises) {
return this.service.fetchBicepsExercises().pipe(
tap((exercise: any) => {
const state = exercise
ctx.patchState({ exercises:state });
console.log('xxxx',exercise);

  }),

);

}
}