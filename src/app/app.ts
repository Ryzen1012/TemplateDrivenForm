import { Component } from '@angular/core';
import { TemplateDemoComponent } from './template-demo/template-demo';

@Component({
  selector: 'app-root',
  imports: [TemplateDemoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Angular_Forms';
}
