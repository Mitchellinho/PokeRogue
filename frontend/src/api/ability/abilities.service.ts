import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Ability} from './ability.model';

@Injectable()
export class AbilityService {

  constructor(private http: HttpClient) {
  }

  // GET list of public, future events
  getAbilities(): Observable<Ability[]> {
      return this.http
      .get<Ability[]>('http://localhost:5000/abilities');
  }
}