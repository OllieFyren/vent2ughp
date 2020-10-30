import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DelayResolve implements Resolve<Observable<any>> {

  constructor() { }

  resolve(): any {
    return Observable.of('delayed navigation').delay(1500);
  }
}
