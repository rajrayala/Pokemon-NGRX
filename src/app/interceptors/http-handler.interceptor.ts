import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpHandlerInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let headers = new HttpHeaders();
    headers = request.headers;
    headers = headers.append('Content-Type', 'application/json');
    request = request.clone({ headers });

    return next.handle(request)
      .pipe(tap(event => {
        if (event instanceof HttpResponse) {
          console.log('success in calling API : ', event);
        }
      }, err => {
        console.log('error in calling API');
        return throwError(err);
      }));
  }
}