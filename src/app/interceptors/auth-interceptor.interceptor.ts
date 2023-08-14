import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExerciceService } from '../services/exercice.service';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {
  //private key = 'pHh+iiqNN8I/kSd9h/5pMg==nmHz1huyefwQPKIw';


  constructor(private auh:ExerciceService) {
    
  }

  intercept(
    request: HttpRequest<unknown>,
     next: HttpHandler): 
     Observable<HttpEvent<unknown>> 
     {
    const auth ='pHh+iiqNN8I/kSd9h/5pMg==nmHz1huyefwQPKIw'
    const modifiedRequest = request.clone({
  
      headers: request.headers.set('x-api-key',auth)
    });
     console.log(modifiedRequest);
    

    return next.handle(modifiedRequest);
  }
}