import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.css']
})
export class AlertasComponent implements OnInit {

  @Input() message: string
  @Input() type = 'success' //por padrão o type do alert vai ser success

  constructor(
    public modal: BsModalRef
  ) { }

  ngOnInit(): void {
  }

  onClose() { // para fechar o alert
    this.modal.hide()
  }

}
