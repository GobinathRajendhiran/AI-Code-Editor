import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Http {

  baseUrl: string = 'http://localhost:3000/'
  constructor(private http: HttpClient){}

  analyzeCodeWithAI(userCode: any) {
    console.log("code", userCode)
    return this.http.post(this.baseUrl+'editor/submitCode', { code: userCode });
  }
}
