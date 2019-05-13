import { Ng2SmartTableModule } from 'ng2-smart-table';
import { JobsService } from './jobs.service';

import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from "./shared/shared.module";
import { ToastModule, ToastOptions } from 'ng2-toastr/ng2-toastr';

import { AppComponent } from './app.component';
import { ContentLayoutComponent } from "./layouts/content/content-layout.component";
import { FullLayoutComponent } from "./layouts/full/full-layout.component";

import { CustomOption } from "./shared/toastr/custom-option";

import { HttpClientModule } from '@angular/common/http';


@NgModule({
    declarations: [
        AppComponent,
        FullLayoutComponent,
        ContentLayoutComponent,    ],
    imports: [
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        SharedModule,
        ToastModule.forRoot(),
        NgbModule.forRoot(),
    ],
    providers: [
        //Toastr providers
        { provide: ToastOptions, useClass: CustomOption },
        JobsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
