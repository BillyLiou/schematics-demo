import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { <%= classify(name) %>Model } from './<%= classify(name) %>Model';
@Injectable({
    providedIn: 'root'
})

export class <%= classify(name) %>Service {
    constructor(private http: HttpClient, private <%= camelize(name) %>Model: <%= classify(name) %>Model) {
        console.log('<%= classify(name) %>Service init');
    }

}
