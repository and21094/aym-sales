import { Component, OnInit, Input, Output, EventEmitter, trigger, style, animate, transition } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
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
export class DialogComponent implements OnInit {

  @Input() visible: boolean
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>()
  @Input() negativeButton: string = "Cancelar"
  @Input() possitiveButton: string = "Aceptar"

  constructor() { }

  ngOnInit() {
  }

  hideOverflow() {
  	document.body.style.overflow = "hidden";
  }

  close() {
    document.body.classList.remove('open')
    document.body.removeAttribute('style')
    this.visible = false
    this.visibleChange.emit(this.visible)
  }

}
