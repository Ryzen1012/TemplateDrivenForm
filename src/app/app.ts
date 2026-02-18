import { Component } from '@angular/core';
import { TemplateDemoComponent } from './template-demo/template-demo';
import { ReactiveDemoComponent } from './reactive-demo/reactive-demo';

@Component({
  selector: 'app-root',
  imports: [TemplateDemoComponent, ReactiveDemoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Angular_Forms';
}
