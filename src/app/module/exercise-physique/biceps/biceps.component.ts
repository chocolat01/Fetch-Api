import { Component, OnInit } from '@angular/core';

import { ExerciceService } from 'src/app/services/exercice.service';


@Component({
  selector: 'app-biceps',
  templateUrl: './biceps.component.html',
  styleUrls: ['./biceps.component.scss']
})
export class BicepsComponent implements OnInit {
  data: any;

  constructor(private exerciceService: ExerciceService) {}

  ngOnInit(): void{
    this.fetchData();
    console.log(this.fetchData())
  }

  fetchData(): void {
    this.exerciceService.fetchBicepsExercises().subscribe 
    ({next:(data)=>{
      this.data=data;
      console.log('data', data)

   } })

  }
}