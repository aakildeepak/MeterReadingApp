import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, } from 'rxjs/operators';
import { UploadResult } from '../models/upload-result';

@Injectable()
export class UploadService {
    private apiPath = '';

    constructor(
        private httpClient: HttpClient
    ) {
        this.apiPath = `http://localhost:52533/meterreading`;
    }    

    upload(formData: any): Observable<UploadResult> {
        const url = `${this.apiPath}/meter-reading-uploads`;
        return this.httpClient.post<UploadResult>(url, formData)
            .pipe(map((result: UploadResult) => {
                return result;
            }));
    }
}