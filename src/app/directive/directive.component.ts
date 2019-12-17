import { Component } from '@angular/core';

class MyClass {
  red: boolean;
  bold: boolean;
  big: boolean;
}

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {

  pClass = new MyClass();
} 