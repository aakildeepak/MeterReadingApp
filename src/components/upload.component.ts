import { Component, ViewChild } from '@angular/core';
import { UploadService } from 'src/services/upload.service';
import { UploadResult } from '../models/upload-result';

@Component({
    selector: 'app-upload',
    templateUrl: './upload.component.html',
    styleUrls: ['./upload.component.css']
})
export class UploadComponent {
    validationErrors: any;
    error = false;
    success = false;
    fileToUpload: any;
    loading = false;
    uploadResult: UploadResult;

    constructor(private uploadService: UploadService) {

    }
    
    @ViewChild('inputFileTarget') inputFileTarget: any;

    updated($event) {
        this.error = false;
        this.success = false;
        const files = $event.target.files || $event.srcElement.files;
        const fileName = files[0];
        if (this.isCsvFile(fileName.name)) {
            this.fileToUpload = fileName;
        } else {
            this.resetUpload();
        }
    }

    getExtension(filename) {
        const parts = filename.split('.');
        return parts[parts.length - 1];
    }

    isCsvFile(filename) {
        const ext = this.getExtension(filename);
        return ext.toLowerCase() === 'csv';
    }

    resetUpload() {
        this.inputFileTarget.nativeElement.value = '';
    }

    fileSelected(): boolean {
        return Boolean(this.fileToUpload);
    }
    
    upload(): void {
        if (!this.fileSelected()) {
            return;
        }
        this.loading = true;
        const formData = new FormData();
        formData.append('file', this.fileToUpload);

        this.uploadService.upload(formData)
            .subscribe((result) => {
                this.loading=false;
                this.success = true;
                this.uploadResult = result;
            });
    }    
}