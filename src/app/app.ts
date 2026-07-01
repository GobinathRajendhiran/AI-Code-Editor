import { Component, signal } from '@angular/core';
import { Editor } from "./editor/editor";
import { Questions } from "./questions/questions";

@Component({
  selector: 'app-root',
  imports: [Editor, Questions],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('CodeEditor');
}
