export interface Message {
  createdAt: Date;
  text?: string;
  sender?: 'assistant' | 'user';
}
