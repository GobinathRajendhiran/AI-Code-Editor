import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Http {

  baseUrl: string = 'http://localhost:3000/'
  constructor(private http: HttpClient){}

  analyzeCodeWithAI(code: any) {
    return this.http.get(this.baseUrl+'/editor/submitCode?'+'code='+code);
  }
}
