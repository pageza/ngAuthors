import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from "@angular/router";
import { AuthorService } from "../author.service";

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {
  author: any;
  params: any;
  errors: any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _author: AuthorService
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.params = params;
    })
    this.getAuthor(this.params)
  }
  goHome() {
    this._router.navigate([''])
  }
  getAuthor(id) {
    const observable = this._author.getOneAuthor(id)
    observable.subscribe( data => this.author = data)
  }
  editAuthor(author) {
    const observable = this._author.editAuthor(author)
    observable.subscribe( data => {
      if (data['errors']) {
        console.log('there be errors')
        this.errors = data['errors']
      } else {
        console.log("Successful edit")
        this.author = data
        this.goHome()
      }
    })
  }
}
