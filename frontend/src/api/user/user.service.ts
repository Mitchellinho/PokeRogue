import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './user.model';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  // GET list of Users
  getUsers(): Observable<User[]> {
      return this.http
      .get<User[]>('http://localhost:5000/users');
  }

  // Post User
postUser(userToCreate: User): Observable<User> {
  return this.http.post<User>('http://localhost:5000/createUser', userToCreate)
}

}