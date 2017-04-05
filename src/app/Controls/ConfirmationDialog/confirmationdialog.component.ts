import { Component, Input, Output, EventEmitter, ViewChild,OnInit,ViewContainerRef  } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';

@Component({
  selector: 'dialog',
  template: 'confirmationdialog.component.html'
})
export class ConfirmationDialogComponent implements OnInit  {
  @Input() message;
  @Input() title;
  @Output() onLoad = new EventEmitter();
  @ViewChild('childModal') public childModal: ModalDirective = null;

  constructor() {
  }

   ngOnInit() {
   this.onLoad.emit(this.childModal);
  }

  okButtonClick() {
    //this.okClick.emit();
  }

  public showChildModal(): void {
    this.childModal.show();
    //this.element.nativeElement.show();
  }

  public hideChildModal(): void {
    //this.smmodel.hide();
    //this.element.nativeElement.hide();
  }
}