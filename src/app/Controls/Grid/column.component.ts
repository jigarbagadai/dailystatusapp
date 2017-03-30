import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataTableComponent } from './datatable.component'

@Component({
  selector: 'column',
  template: ''
})
export class ColumnComponent {
  @Input() value;
  @Input() header;
  @Input() ishidden = false;
  @Input() columnType = 'text';
  @Input() width = '-1';
  @Input() contentClass;
  @Input() datatype = 'string';
  @Input() allowsort = 'true';
  @Output() actionClick = new EventEmitter();

  constructor(table: DataTableComponent) {
    table.addColumn(this);
  }

  ActionLinkClick(id) {
    this.actionClick.emit(id);
    console.log(id);
  }
}