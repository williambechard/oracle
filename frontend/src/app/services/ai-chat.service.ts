import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AiChatService {
  private apiUrl = 'http://localhost:5000/ask'; // Replace with your actual backend API URL

  constructor(private http: HttpClient) {}

  askQuestion(question: string): Observable<string> {
    // Send the question to your backend, which will forward it to Cursor
    return this.http.post<string>(`${this.apiUrl}`, { content: question });
  }
}
