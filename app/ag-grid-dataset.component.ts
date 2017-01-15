import {Component, ViewEncapsulation, OnInit} from '@angular/core';

import {GridOptions} from 'ag-grid/main';

@Component({
    moduleId: module.id,
    selector: 'ag-grid-dataset',
    templateUrl: 'ag-grid-dataset.component.html',
    encapsulation: ViewEncapsulation.None
})
export class AgGridDataset implements OnInit {

    private gridOptions: GridOptions;
    public showGrid: boolean;
    public rowData: any[];
    private columnDefs: any[];
    public rowCount: string;

    constructor() {}

    ngOnInit(): void {
        this.gridOptions = <GridOptions> {};
        this.createRowData();
        this.createColumnDefs();
        this.showGrid = true;
    }

    private createRowData() {
        var rowData: any[] = [];

        for (var i = 0; i < 100000; i++) {
            rowData.push({
                name: 'default name',
                skills: {
                    android: Math.random() < 0.4,
                    html5: Math.random() < 0.4,
                    mac: Math.random() < 0.4,
                    windows: Math.random() < 0.4,
                    css: Math.random() < 0.4
                },
                address: 'default address',
                years: Math.round(Math.random() * 100),
                proficiency: Math.round(Math.random() * 100),
                country: 'default country',
                continent: 'default continent',
                language: 'default language',
                mobile: 'default mobile',
                landline: 'default landline'
            });
        }

        this.rowData = rowData;
    }


    private createColumnDefs() {
        this.columnDefs = [
            {
                headerName: '#', width: 30, checkboxSelection: true, suppressSorting: true,
                suppressMenu: true, pinned: true
            },
            {
                headerName: 'Employee',
                children: [
                    {
                        headerName: "Name", field: "name",
                        width: 150, pinned: true
                    },
                    {
                        headerName: "Country", field: "country", width: 150,

                    },
                ]
            },
            {
                headerName: 'IT Skills',
                children: [
                    {
                        headerName: "Skills",
                        width: 125,
                        suppressSorting: true
                    },
                    {
                        headerName: "Proficiency",
                        field: "proficiency",
                        width: 120
                    },
                ]
            },
            {
                headerName: 'Contact',
                children: [
                    {headerName: "Mobile", field: "mobile", width: 150, filter: 'text'},
                    {headerName: "Land-line", field: "landline", width: 150, filter: 'text'},
                    {headerName: "Address", field: "address", width: 500, filter: 'text'}
                ]
            }
        ];
    }

    public onModelUpdated() {
        console.log('onModelUpdated');
        this.calculateRowCount();
    }

    public onReady() {
        console.log('onReady');
        this.calculateRowCount();
    }

    private calculateRowCount() {
        if (this.gridOptions.api && this.rowData) {
            var model = this.gridOptions.api.getModel();
            var totalRows = this.rowData.length;
            var processedRows = model.getRowCount();
            this.rowCount = processedRows.toLocaleString() + ' / ' + totalRows.toLocaleString();
        }
    }

}