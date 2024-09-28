import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursorChatService {
  private apiUrl = 'YOUR_BACKEND_API_URL'; // Replace with your actual backend API URL

  constructor(private http: HttpClient) {}

  openChat() {
    // Implement the logic to open the chat interface
    // This could be a modal, a side panel, or navigating to a new page
    console.log('Opening Cursor chat interface');
  }

  askQuestion(question: string): Observable<string> {
    // Send the question to your backend, which will forward it to Cursor
    return this.http.post<string>(`${this.apiUrl}/ask-cursor`, { question });
  }
}