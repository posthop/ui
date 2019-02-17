import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Driver} from "./driver.model";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) {
  }

  getRandomDriver(): Observable<Driver> {
    return this.http.get<Driver>(environment.baseUrl + "/api/random_user");
  }
}