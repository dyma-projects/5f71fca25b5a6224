import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  @Input('compteur') compteur: number;
  @Output('compteurValue') compteurValue: EventEmitter<number>;

  constructor() { 
    this.compteurValue = new EventEmitter<number>();
  }

  ngOnInit() {
  }

  modifyCompteur(value: boolean): void {
    this.compteur = value ? this.compteur + 1 : this.compteur - 1;
    this.compteurValue.emit(this.compteur);
  }
}
