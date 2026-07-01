import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-questions',
  imports: [],
  templateUrl: './questions.html',
  styleUrl: './questions.scss',
})

export class Questions {
  showQuestionForm = signal(true);
  showQuestionList = signal(true);
}
