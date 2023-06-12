import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(
    private httpClient: HttpClient
  ) {

   }

   sendMessage(formData: FormData): Observable<any>{
    return this.httpClient.post('https://formsubmit.co/33acd5a6c7fc97661a6df3deeee67997', formData);
   }
}
