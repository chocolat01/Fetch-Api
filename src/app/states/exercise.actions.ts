export class FetchExercises {
    static readonly type = '[Exercise] Fetch Exercises';
  
    constructor(public url: string) {}
  }