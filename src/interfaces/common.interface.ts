export interface InterviewQuestion {
  id?: string;
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
  createdAt: Date;
  updatedAt: Date;
}