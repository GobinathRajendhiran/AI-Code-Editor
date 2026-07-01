import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Http } from '../../services/http/http';

interface InterviewQuestion {
  id: string;
  title: string;
  topic: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  brief: string;
  description: string;
  sampleInput: string;
  sampleOutput: string;
  explanation: string;
  language: 'JavaScript' | 'TypeScript' | 'Python';
  starterCode: string;
  expectedApproach: string;
  constraints: string;
  commonMistakes: string;
  tags: string[];
  score: number;
  status: 'Draft' | 'Published' | 'Archived';
  showInProblemSelector: boolean;
  allowAiExplanation: boolean;
  allowSavedAttempts: boolean;
}

interface AiResult {
  score: number;
  correctness: string;
  codeQuality: string;
  timeComplexity: string;
  spaceComplexity: string;
  mistakes: string[];
  betterSolution: string;
  interviewExplanation: string;
}

interface SavedAttempt {
  questionId: string;
  code: string;
  createdAt: Date;
}

@Component({
  selector: 'app-editor',
  imports: [FormsModule, CommonModule],
  templateUrl: './editor.html',
  styleUrl: './editor.scss',
})
export class Editor {
  selectedQuestionId = '';
  selectedQuestion: InterviewQuestion | null = null;

  userCode = '';
  aiResult: AiResult | null = null;
  savedAttempts: SavedAttempt[] = [];

  questions: InterviewQuestion[] = [
    {
      id: 'q1',
      title: 'Find the Longest Word',
      topic: 'String',
      difficulty: 'Easy',
      brief: 'Find the longest word from the given sentence.',
      description:
        'Given a sentence, return the longest word. If multiple words have the same length, return the first longest word.',
      sampleInput: '"I love JavaScript programming"',
      sampleOutput: '"programming"',
      explanation:
        'The word "programming" has the highest length compared to other words.',
      language: 'JavaScript',
      starterCode: `function findLongestWord(sentence) {
  // write your code here
}

console.log(findLongestWord("I love JavaScript programming"));`,
      expectedApproach:
        'Split the sentence into words, loop through each word, compare the length, and return the longest word.',
      constraints:
        'Input will be a non-empty string. Words are separated by spaces.',
      commonMistakes:
        'Returning the length instead of the word. Not handling multiple spaces. Not returning the first longest word.',
      tags: ['string', 'loop', 'interview'],
      score: 10,
      status: 'Published',
      showInProblemSelector: true,
      allowAiExplanation: true,
      allowSavedAttempts: true
    },
    {
      id: 'q2',
      title: 'Reverse an Array',
      topic: 'Array',
      difficulty: 'Easy',
      brief: 'Reverse the given array without using the reverse method.',
      description:
        'Given an array, return a new array with the elements in reverse order. Do not use the built-in reverse method.',
      sampleInput: '[1, 2, 3, 4]',
      sampleOutput: '[4, 3, 2, 1]',
      explanation:
        'The last element becomes first, and the first element becomes last.',
      language: 'JavaScript',
      starterCode: `function reverseArray(arr) {
  // write your code here
}

console.log(reverseArray([1, 2, 3, 4]));`,
      expectedApproach:
        'Loop from the last index to the first index and push each value into a new array.',
      constraints:
        'Do not use Array.prototype.reverse(). Input will always be an array.',
      commonMistakes:
        'Using reverse method. Mutating the original array when not required. Wrong loop condition.',
      tags: ['array', 'loop', 'basic'],
      score: 10,
      status: 'Published',
      showInProblemSelector: true,
      allowAiExplanation: true,
      allowSavedAttempts: true
    }
  ];

  constructor(private httpService: Http) {}

  onQuestionChange(): void {
    const question = this.questions.find(
      item => item.id === this.selectedQuestionId
    );

    if (!question) {
      this.selectedQuestion = null;
      this.userCode = '';
      this.aiResult = null;
      this.savedAttempts = [];
      return;
    }

    this.selectedQuestion = question;
    this.userCode = question.starterCode;
    this.aiResult = null;

    this.loadSavedAttempts(question.id);
  }

  resetStarterCode(): void {
    if (!this.selectedQuestion) {
      return;
    }

    this.userCode = this.selectedQuestion.starterCode;
    this.aiResult = null;
  }

  analyzeCode(): void {
    if (!this.selectedQuestion || !this.userCode.trim()) {
      return;
    }

    const aiPayload = {
      questionTitle: this.selectedQuestion.title,
      topic: this.selectedQuestion.topic,
      difficulty: this.selectedQuestion.difficulty,
      description: this.selectedQuestion.description,
      sampleInput: this.selectedQuestion.sampleInput,
      sampleOutput: this.selectedQuestion.sampleOutput,
      expectedApproach: this.selectedQuestion.expectedApproach,
      constraints: this.selectedQuestion.constraints,
      commonMistakes: this.selectedQuestion.commonMistakes,
      userCode: this.userCode
    };

    console.log('Send this payload to AI:', aiPayload);
    this.httpService.analyzeCodeWithAI(aiPayload).subscribe(ele => {
      console.log('Network data : ',ele)
    })

    // Temporary dummy AI result
    // Later replace this with actual API response
    this.aiResult = {
      score: 78,
      correctness:
        'Your solution is mostly correct, but it needs better edge case handling.',
      codeQuality:
        'Code is readable, but variable naming and input validation can be improved.',
      timeComplexity:
        'O(n), because the solution loops through the input once.',
      spaceComplexity:
        'O(1) or O(n), depending on whether you create an extra array.',
      mistakes: [
        'Edge cases are not fully handled.',
        'No validation for empty input.',
        'The solution can be explained better in interview style.'
      ],
      betterSolution: `function findLongestWord(sentence) {
  const words = sentence.trim().split(/\\s+/);
  let longest = words[0];

  for (const word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}`,
      interviewExplanation:
        'I split the sentence into words and used a loop to track the longest word. Since I visit each word once, the time complexity is O(n).'
    };
  }

  saveAttempt(): void {
    if (!this.selectedQuestion || !this.userCode.trim()) {
      return;
    }

    const attempt: SavedAttempt = {
      questionId: this.selectedQuestion.id,
      code: this.userCode,
      createdAt: new Date()
    };

    const storageKey = this.getStorageKey(this.selectedQuestion.id);

    const existingAttempts = this.getAttemptsFromStorage(storageKey);
    existingAttempts.unshift(attempt);

    localStorage.setItem(storageKey, JSON.stringify(existingAttempts));

    this.savedAttempts = existingAttempts;
  }

  loadSavedAttempts(questionId: string): void {
    const storageKey = this.getStorageKey(questionId);
    this.savedAttempts = this.getAttemptsFromStorage(storageKey);
  }

  loadAttempt(attempt: SavedAttempt): void {
    this.userCode = attempt.code;
    this.aiResult = null;
  }

  private getStorageKey(questionId: string): string {
    return `saved_attempts_${questionId}`;
  }

  private getAttemptsFromStorage(storageKey: string): SavedAttempt[] {
    const attempts = localStorage.getItem(storageKey);

    if (!attempts) {
      return [];
    }

    return JSON.parse(attempts).map((attempt: SavedAttempt) => ({
      ...attempt,
      createdAt: new Date(attempt.createdAt)
    }));
  }
}