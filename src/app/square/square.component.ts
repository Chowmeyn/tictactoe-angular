import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
  <style>
    button {
      width: 200px;
      height: 200px;
    }
  </style>
    <p>
      <button nbButton *ngIf="!value">{{ value }}</button>
      <button nbButton fullWidth hero status="success" *ngIf="value == 'X'">{{ value }}</button>
      <button nbButton fullWidth hero status="info" *ngIf="value == 'O'">{{ value }}</button>
    </p>
  `,
  styles: [
  ]
})
export class SquareComponent {

@Input() value!: 'X' | 'O';

}
