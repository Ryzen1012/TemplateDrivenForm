import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-template-demo',
  imports: [FormsModule, NgIf],
  templateUrl: './template-demo.html',
  styleUrl: './template-demo.css'
})
export class TemplateDemoComponent {
  title = 'Template Driven Demo';
  username = '';
  email = '';
  password = '';
  role = '';
  gender = '';
  status = '';
  comments = '';
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
}
