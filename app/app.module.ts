import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';

import {AgGridModule} from 'ag-grid-ng2/main';

import {AgGridDataset} from './ag-grid-dataset.component';

@NgModule({
    imports: [
        BrowserModule,
        AgGridModule.withComponents([]),
    ],
    declarations: [
        AppComponent,
        AgGridDataset
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
