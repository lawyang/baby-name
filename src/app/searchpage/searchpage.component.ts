import { Component, OnInit } from '@angular/core';
import { SearchService } from '../shared/search.service';
import { HttpClient } from '@angular/common/http';
import { log } from 'util';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent implements OnInit {

  test = [1, 2, 3, 4, 5];
  name = {};
  babyName: '';
  response: {};

  constructor(private searchService: SearchService, private http: HttpClient) { }

  showName() {
    this.searchService.getName()
    .subscribe(name => this.name = name);
    console.log('asdf', this.name);
    console.log('asdfasdfasdf', name);
  }

  search() {
    const url = this.http.get(`https://www.behindthename.com/api/lookup.json?name=${this.babyName}&key=la201484095`);
    url.subscribe(response => {
      this.response = response[0];
      console.log('This is the Response', this.response);
      console.log('This is the Response', this.response);

    });
  }

  ngOnInit() {
    const obs = this.http.get('https://www.behindthename.com/api/lookup.json?name=mary&key=la201484095');
    obs.subscribe((response) => console.log(response[0]));
    console.log(this.name);
    this.showName();
  }

}
