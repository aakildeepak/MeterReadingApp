import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UploadComponent } from 'src/components/upload.component';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UploadService } from 'src/services/upload.service';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
