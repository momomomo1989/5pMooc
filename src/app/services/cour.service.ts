import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CourService {

constructor(public _http: Http) { }


getAllCours() {

  return this._http.get('http://localhost:3000/api/cours/listcours')
    .map(results => results.json());

}


  getCoursById(id: string) {
    return this._http.get('http://localhost:3000/api/cours/listcours/' + id)
      .map(result => result.json());

  }

}
