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

  name = {};
  babyName: '';
  response: {};
  mary: any;
  usage = [];
  gender = '';
  random: string[];

  constructor(private searchService: SearchService, private http: HttpClient) {
    searchService.print('Got the service!');
   }


  showName() {
    this.searchService.getName()
      .subscribe(data => this.mary = data);
      console.log('observable', this.mary);
  }

  randomFemale() {
    const url  = this.http.get(`https://www.behindthename.com/api/random.json?usage=ita&number=6&gender=f&key=la201484095`);
    url.subscribe(response => {
      this.random = response.names;
      console.log('response:', response);
      console.log(this.random);
    });
  }

  search() {
    const url = this.http.get(`https://www.behindthename.com/api/lookup.json?name=${this.babyName}&key=la201484095`);
    url.subscribe(response => {
      this.response = response[0];
      this.usage = response[0].usages;
      console.log('This is the Response', this.response);
      console.log('This is the Usages', this.usage);
      if (response[0].gender === 'f') {
        this.gender = 'Female';
      } else if (response[0].gender === 'fm') {
        this.gender = 'Male & Female';
      } else {
        this.gender = 'Male';
      }
    });
  }

  ngOnInit() {
    // const obs = this.http.get('https://www.behindthename.com/api/lookup.json?name=mary&key=la201484095');
    // obs.subscribe((response) => console.log(response[0]));
    // console.log(this.name);
    this.showName();
  }

}
