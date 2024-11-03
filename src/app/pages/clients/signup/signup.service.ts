import { Location } from './signup.model'; 
import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService  {

  serverUrl: string = 'http://localhost:3000/userList';

  constructor(private httpClient: HttpClient) {}
  
  getAllLocation():Observable<any>{
    return this.httpClient.get(this.serverUrl);
  }

  createLocation(location: Location):Observable<Location>{
    return this.httpClient.post<Location>(this.serverUrl, location);
  }
  
}
