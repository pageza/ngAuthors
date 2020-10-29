import { Component, OnInit } from '@angular/core';
import { AuthorService } from "../author.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-display-author',
  templateUrl: './display-author.component.html',
  styleUrls: ['./display-author.component.css']
})
export class DisplayAuthorComponent implements OnInit {
  authors: any = []
  constructor(private _authors: AuthorService, private _router: Router) { }

  ngOnInit() {
    this.getAuthors()
  }
  getAuthors() {
    const observable = this._authors.getAuthors();
    observable.subscribe( data => this.authors = data);
  }
  edit(id) {
    this._router.navigate(['edit', id])
  }
  delete(id) {

  }
}
