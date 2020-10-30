import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthorService } from "../author.service";
@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {
  newAuthor: any = {'author': ''};

  constructor(
    private _router: Router,
    private _authors: AuthorService
   ) { }

  ngOnInit() {
  }
  goHome() {
    this._router.navigate([''])
  }
  createAuthor(author) {
    const observable = this._authors.createAuthor(author)
    observable.subscribe(data => console.log(data))
    this.newAuthor = {'author': ''}
  }
}
