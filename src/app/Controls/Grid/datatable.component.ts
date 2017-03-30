import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ColumnComponent } from './column.component';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'datatable',
  templateUrl: 'datatable.component.html'
})

export class DataTableComponent {
  @Input() dataset;
  @Input() sortkey;
  @Input() sortdirection;

  @Output() onSorting = new EventEmitter();
  columns: ColumnComponent[] = [];
  dateformat: string = environment.dateFormet;

  addColumn(column) {
    this.columns.push(column);
  }

  OnGridSorting(sortingkey: string, sortingDirection: string) {
    this.onSorting.emit({ "Sortkey": sortingkey, "SortDirection": sortingDirection });
  }
}