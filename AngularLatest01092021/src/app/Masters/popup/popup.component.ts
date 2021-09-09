import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]

})
export class PopupComponent implements OnInit {
  @Input() className: any = "modal-dialog modal-md";
  @Input() closable = true;
  @Input() visible?: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  //Esign: any = FormGroup;
  @Input() Esignature?: boolean;
  PasswordFlag?: boolean;
  emppId!: string;
  @Output() esignData: EventEmitter<boolean> = new EventEmitter<boolean>();
  renderer: any;
  document: any;
  constructor() { 
  }
  @Input () isOpen=false;
  @Input() title = "Title";
  @Output() onClose = new EventEmitter<string>();
 
  ngOnInit(): void {
  }
 
  closePopup() {
    debugger
    this.visible = false;
    this.isOpen=false;
    this.onClose.emit('Pop-up window closed');
  }
  close() {
    debugger
    this.Esignature = false;
    this.esignData.emit(this.Esignature);
  }
 
}