import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  styleUrls: ['./main.scss'],
  imports: [CommonModule],
  template: `
    <h1>Grettir Store<h1>
  `,
})
export class App {}

bootstrapApplication(App);
