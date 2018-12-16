import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {

    constructor(private http: HttpClient) {

    }

    public getFilms(): Observable<any> {
        return this.http.get('http://glamdim-001-site1.ftempurl.com/api/Movie');
    }
    public getFilmById(id: number) {
        const url = 'http://glamdim-001-site1.ftempurl.com/api/Movie/' + id;
        return this.http.get(url);
    }
}
