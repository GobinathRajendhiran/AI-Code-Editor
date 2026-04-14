import { Component, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { EditorComponent } from "ngx-monaco-editor-v2";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editor',
  imports: [EditorComponent, FormsModule, CommonModule],
  templateUrl: './editor.html',
  styleUrl: './editor.scss',
})
export class Editor {
  private platformId = inject(PLATFORM_ID);
  isBrowser = isPlatformBrowser(this.platformId);
  
  selectedLanguage: string = 'javascript';
  
  editorOptions = { theme: 'vs-dark', language: this.selectedLanguage, automaticLayout: false }
  code: string = `function hello() { console.log('Welcome to the Monaco editor Mr Gobinath') }`;

  supportedLanguages = [
    { label: 'JavaScript', value: 'javascript' },
    { label: 'TypeScript', value: 'typescript' },
    { label: 'Python', value: 'python' },
    { label: 'Java', value: 'java' },
    { label: 'C++', value: 'cpp' },
    { label: 'C', value: 'c' },
    { label: 'C#', value: 'csharp' },
    { label: 'Ruby', value: 'ruby' },
    { label: 'PHP', value: 'php' },
    { label: 'Go', value: 'go' },
    { label: 'Rust', value: 'rust' },
    { label: 'SQL', value: 'sql' },
    { label: 'HTML', value: 'html' },
    { label: 'CSS', value: 'css' },
    { label: 'SCSS', value: 'scss' },
    { label: 'JSON', value: 'json' },
    { label: 'XML', value: 'xml' },
    { label: 'YAML', value: 'yaml' },
    { label: 'Kotlin', value: 'kotlin' },
    { label: 'Swift', value: 'swift' },
    { label: 'Objective-C', value: 'objectivec' },
    { label: 'Perl', value: 'perl' },
    { label: 'R', value: 'r' },
    { label: 'Lua', value: 'lua' },
    { label: 'Groovy', value: 'groovy' },
    { label: 'PowerShell', value: 'powershell' },
    { label: 'Bash', value: 'bash' },
    { label: 'Markdown', value: 'markdown' },
    { label: 'Dockerfile', value: 'dockerfile' },
    { label: 'GraphQL', value: 'graphql' },
  ];

  changeLanguage() {
    this.editorOptions = { 
      ...this.editorOptions, 
      language: this.selectedLanguage 
    };
  }

  runTheEditorCode() {
    console.log("Running the code...");
    console.log("CODE : ",this.code)
  }
}
