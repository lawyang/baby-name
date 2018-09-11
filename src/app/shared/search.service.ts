import { Injectable } from '@angular/core';
import { map} from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';

const NAME_URL = 'https://www.behindthename.com/api/lookup.json?name=mary&key=la201484095';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private http: HttpClient) {}

  getName() {
    return this.http.get(NAME_URL);
  }

}
