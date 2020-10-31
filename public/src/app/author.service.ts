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
  getOneAuthor(author) {
    return this._http.get('/authors/' + author.id)
  }
  // create an author
  createAuthor(author) {
    return this._http.post('/authors', author)
  }

  //TODO: edit an author
  editAuthor(author) {
    return this._http.put('/authors/' + author._id, author)
  }
  //TODO: delete an author
  deleteAuthor(author) {
    return this._http.delete( '/authors/' + author)
  }
}
