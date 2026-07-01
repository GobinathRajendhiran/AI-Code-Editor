// import { Component, ElementRef, OnInit, PLATFORM_ID, inject, viewChild, ChangeDetectorRef } from '@angular/core';
// import { isPlatformBrowser } from '@angular/common';
// import { EditorComponent } from "ngx-monaco-editor-v2";
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-editor',
//   imports: [EditorComponent, FormsModule, CommonModule],
//   templateUrl: './editor.html',
//   styleUrl: './editor.scss',
// })
// export class Editor implements OnInit {

//   private platformId = inject(PLATFORM_ID);
//   isBrowser = isPlatformBrowser(this.platformId);
  
//   selectedLanguage: string = 'javascript';
  
//   editorOptions = { theme: 'vs-dark', language: this.selectedLanguage, automaticLayout: false }
//   code: string = `function createUser(name, age) {
//   console.log("Creating user...");
//   return { name, age, tasks: [] };
// }

// function addTask(user, taskName) {
//   console.log("Adding task:", taskName);
//   user.tasks.push({ name: taskName, completed: false });
// }

// function completeTask(user, taskName) {
//   console.log("Completing task:", taskName);
//   user.tasks.forEach(task => {
//     if (task.name === taskName) {
//       task.completed = true;
//     }
//   });
// }

// function listTasks(user) {
//   console.log("Listing tasks...");
//   user.tasks.forEach((task, index) => {
//     console.log(index + 1, task.name, task.completed);
//   });
// }

// function deleteTask(user, taskName) {
//   console.log("Deleting task:", taskName);
//   user.tasks = user.tasks.filter(task => task.name !== taskName);
// }

// function simulateWork(user) {
//   console.log("Simulating work...");
//   addTask(user, "Write code");
//   addTask(user, "Fix bugs");
//   addTask(user, "Push to repo");
//   listTasks(user);
//   completeTask(user, "Fix bugs");
//   listTasks(user);
// }

// function generateReport(user) {
//   console.log("Generating report...");
//   let completed = user.tasks.filter(t => t.completed).length;
//   let pending = user.tasks.length - completed;
//   console.log("Completed:", completed);
//   console.log("Pending:", pending);
// }

// function delay(ms) {
//   console.log("Waiting for", ms, "ms");
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function asyncFlow(user) {
//   console.log("Starting async flow...");
//   await delay(500);
//   addTask(user, "Async task 1");
//   await delay(500);
//   addTask(user, "Async task 2");
//   listTasks(user);
// }

// function sortTasks(user) {
//   console.log("Sorting tasks...");
//   user.tasks.sort((a, b) => a.name.localeCompare(b.name));
// }

// function clearTasks(user) {
//   console.log("Clearing all tasks...");
//   user.tasks = [];
// }

// function main() {
//   console.log("App started");
//   const user = createUser("Gobinath", 25);
//   simulateWork(user);
//   generateReport(user);
//   sortTasks(user);
//   listTasks(user);
//   deleteTask(user, "Write code");
//   listTasks(user);
//   asyncFlow(user).then(() => {
//     console.log("Async flow completed");
//     generateReport(user);
//     clearTasks(user);
//     listTasks(user);
//   });
// }

// main();

// // Extra logs for debugging
// console.log("End of script line 1");
// console.log("End of script line 2");
// console.log("End of script line 3");
// console.log("End of script line 4");
// console.log("End of script line 5");
// console.log("End of script line 6");
// console.log("End of script line 7");
// console.log("End of script line 8");
// console.log("End of script line 9");
// console.log("End of script line 10");
// console.log("End of script line 11");
// console.log("End of script line 12");
// console.log("End of script line 13");
// console.log("End of script line 14");
// console.log("End of script line 15");
// console.log("End of script line 16");
// console.log("End of script line 17");
// console.log("End of script line 18");
// console.log("End of script line 19");
// console.log("End of script line 20");`;
//   supportedLanguages = [
//     { label: 'JavaScript', value: 'javascript' },
//     { label: 'TypeScript', value: 'typescript' },
//     { label: 'Python', value: 'python' },
//     { label: 'Java', value: 'java' },
//     { label: 'C++', value: 'cpp' },
//     { label: 'C', value: 'c' },
//     { label: 'C#', value: 'csharp' },
//     { label: 'Ruby', value: 'ruby' },
//     { label: 'PHP', value: 'php' },
//     { label: 'Go', value: 'go' },
//     { label: 'Rust', value: 'rust' },
//     { label: 'SQL', value: 'sql' },
//     { label: 'HTML', value: 'html' },
//     { label: 'CSS', value: 'css' },
//     { label: 'SCSS', value: 'scss' },
//     { label: 'JSON', value: 'json' },
//     { label: 'XML', value: 'xml' },
//     { label: 'YAML', value: 'yaml' },
//     { label: 'Kotlin', value: 'kotlin' },
//     { label: 'Swift', value: 'swift' },
//     { label: 'Objective-C', value: 'objectivec' },
//     { label: 'Perl', value: 'perl' },
//     { label: 'R', value: 'r' },
//     { label: 'Lua', value: 'lua' },
//     { label: 'Groovy', value: 'groovy' },
//     { label: 'PowerShell', value: 'powershell' },
//     { label: 'Bash', value: 'bash' },
//     { label: 'Markdown', value: 'markdown' },
//     { label: 'Dockerfile', value: 'dockerfile' },
//     { label: 'GraphQL', value: 'graphql' },
//   ];

//   constructor(private cdr: ChangeDetectorRef) {}

//   ngOnInit(): void {
//   };

//   changeLanguage() {
//     this.editorOptions = { 
//       ...this.editorOptions, 
//       language: this.selectedLanguage 
//     };
//   }

//   runTheEditorCode() {
  
//   }

// }

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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