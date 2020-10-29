import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private _http: HttpClient) { }
  //TODO: get all authors
  getAuthors() {
    return this._http.get('/authors')
  }
  //TODO: get one author
  //TODO: create an author
  //TODO: edit an author
  //TODO: delete an author
}
