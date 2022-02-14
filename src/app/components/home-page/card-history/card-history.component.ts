import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-history',
  templateUrl: './card-history.component.html',
  styleUrls: ['./card-history.component.scss'],
})
export class CardHistoryComponent implements OnInit {
  title: string = 'MINHA HISTORIA NO RAMO DE TÉCNOLOGIA';
  text: string ="Texto"


  constructor() {}

  ngOnInit() {}
}
