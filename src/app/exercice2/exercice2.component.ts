import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {
  
  @ViewChild('inputText') element: ElementRef;
  public valeur: string;

  constructor() {
  }
  
  ngOnInit() {
  }

  inputKeyUp(): void {
    this.valeur = this.element.nativeElement.value;
  }
}
