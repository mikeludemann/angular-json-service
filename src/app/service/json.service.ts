import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class JsonService {

	constructor(private http: HttpClient, public url) {
		this.getJSON(url).subscribe(data => {
			console.log(data);
		});
	}

	public getJSON(url): Observable<any> {
		return this.http.get(url);
	}

}
