import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiModel } from './ApiModel';
@Injectable({
    providedIn: 'root'
})

export class ApiService {
    constructor(private http: HttpClient, private apiModel: ApiModel) {
        console.log('ApiService init');
    }

}
