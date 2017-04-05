import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'dailystatus-pagination',
  templateUrl: 'pagination.component.html'
})

export class paginationComponent implements OnInit, OnChanges {
  @Input() currentpagenumber = 1;
  @Input() totalrecords: number;
  @Output() onPaging = new EventEmitter();
  PagingInfo: string = "";
  totalpage : number = 0;

  pages: number[] = [];

  ngOnChanges() {
    if (this.totalrecords <= 0) {
      this.PagingInfo = "No records found !!!";
    }
    else {
      let startrecord: number = ((this.currentpagenumber - 1) * environment.pagingSize) + 1;
      let endrecord: number = this.currentpagenumber * environment.pagingSize;

      if(endrecord > this.totalrecords)
      {
        endrecord = this.totalrecords;
      }
      this.PagingInfo = "Showing " + startrecord + " to " + endrecord + " of " + this.totalrecords + " entries";
    }

    this.pages = [];
    this.totalpage = Math.ceil(this.totalrecords / environment.pagingSize);
    if (this.totalpage > 5) {
      this.totalpage = 5;
    }

    for (let i = 1; i <= this.totalpage; i++) {
      this.pages.push(i);
    }
  }

  ngOnInit() {
  }

  OnGridPaging(pagenumber: string) {
    let selectedpagenumber: number = 1;
    if (pagenumber == "PREVIOUS") {
      selectedpagenumber = parseInt(this.currentpagenumber.toString()) - 1;
    }
    else if (pagenumber == "NEXT") {
      selectedpagenumber = parseInt(this.currentpagenumber.toString()) + 1;
    }
    else {
      selectedpagenumber = parseInt(pagenumber);
    }

    this.onPaging.emit(selectedpagenumber);
  }
}