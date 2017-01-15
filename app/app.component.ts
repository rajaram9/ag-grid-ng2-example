import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello ag-grid with {{name}}</h1>
    <ag-grid-dataset></ag-grid-dataset>
    
    `,
})
export class AppComponent  { name = 'Angular2'; }
