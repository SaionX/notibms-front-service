import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from "../../environments/environment";
import { Entitat } from "../models/entitat";

const baseUrl = `${environment.apiUrl}/entitats`;

@Injectable({ providedIn: 'root' })
export class EntitatService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Entitat[]>(baseUrl);
    }

    getById(id: number) {
        return this.http.get<Entitat>(`${baseUrl}/${id}`);
    }

    create(params: any) {
        return this.http.post(baseUrl, params);
    }

    update(id: number, params: any) {
        return this.http.put(`${baseUrl}/${id}`, params);
    }

    delete(id: number) {
        return this.http.delete(`${baseUrl}/${id}`);
    }
}
