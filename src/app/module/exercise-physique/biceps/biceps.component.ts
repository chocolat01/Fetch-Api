import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Exercise } from 'src/app/models/exercise.model';
import { FetchExercises } from 'src/app/states/exercise.actions';
import { ExerciseState } from 'src/app/states/exercise.state';

@Component({
  selector: 'app-biceps',
  templateUrl: './biceps.component.html',
  styleUrls: ['./biceps.component.scss'],
})
export class BicepsComponent implements OnInit {
  @Select(ExerciseState.getExercises) biceps$: Observable<Exercise[]> | undefined;

  constructor(private store: Store) {}

  ngOnInit() {
    const apiUrl = 'https://api.api-ninjas.com/v1/exercises?muscle=biceps'; // Remplacez par votre URL d'API

    this.store.dispatch(new FetchExercises(apiUrl));

    this.biceps$?.subscribe({
      next: (data: Exercise[]) => {
        console.log('Data:', data);
      },
    });
  }
}