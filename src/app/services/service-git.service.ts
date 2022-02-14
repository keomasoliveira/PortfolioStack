import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Git } from '../models/Git';
import { SharedService } from '../models/global';

@Injectable({
  providedIn: 'root',
})
export class ServiceGitService {
  API = 'https://api.github.com/users/keomasoliveira/repos';
  API_LING = 'https://api.github.com/repos/keomasoliveira';

  dadosGit!: Git[];

  constructor(
    private httpClient: HttpClient,
    private sharedService: SharedService
  ) {}

  public getRepo(): Observable<Git[]> {
    return this.httpClient.get<Git[]>(this.API);
  }

  public getLing(URL:any[]): Observable<Git[]> {

   return  this.httpClient.get<any[]>(`${URL}`);
   ;
  }
  public getLingTest(URL:any[],): Observable<Git[]> {

   return  this.httpClient.get<any[]>(`${URL}`);
   ;



  }


}
