import {ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageModule } from "primeng/image";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { AstroComponentsModule } from "@astrouxds/angular";
import {ChatBoxComponent} from "../../components/chat-box/chat-box.component";
import {AutoFocus} from "primeng/autofocus";
import {ApiService} from "../../services/api/api.service";
import {PdfViewerModule} from "ng2-pdf-viewer";
import {SafeUrlPipe} from "../../pipes/SafeUrlPipe";
import {OptionsButtonComponent} from "../../components/options-button/options-button.component";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  imports: [
    CommonModule,
    ImageModule,
    IonicModule,
    FormsModule,
    ButtonModule,
    AstroComponentsModule,
    ChatBoxComponent,
    AutoFocus,
    PdfViewerModule,
    SafeUrlPipe,
    OptionsButtonComponent,
  ],
  standalone: true
})
export class ChatComponent  implements OnInit {
  @ViewChild('scrollableChat') private scrollableChat!: ElementRef;
  chats: Chat[] = [];
  message: string = "";
  isLoading:boolean=false;
  url: Url = {containsUrl: false, url: ""};

  constructor(private apiService:ApiService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    // submit a chat to start the conversation
    this.chats.push({message: 'Welcome! Please type your question below. You can also you the settings button to the right to change LLM and other settings.', isUser: false, containsUrl: false, url: "", references: ""});
    this.apiService.countMonthlyTokens().subscribe((response: any) => {
      console.log('response:', response);
    });
  }

  submitChat() {
    console.log('chat submitted:', this.message);
    this.isLoading=true;
    // send chat to server
    this.chats.push({message: this.message, isUser: true, containsUrl: false, url: "", references: ""});

    // Ensure the UI has updated before scrolling
    this.cdr.detectChanges();  // Trigger change detection
    setTimeout(() => this.scrollToBottom(), 100);  // Scroll to bottom after DOM update

    this.apiService.ask({message:this.sanitizeMessage(this.message)}).subscribe((response: any) => {

      console.log('response:', response);
      this.isLoading=false;
      this.url = this.extractUrl(response.message);
      console.log('url:', this.url);
      this.chats.push({message: response.message, isUser: false, containsUrl: this.url.containsUrl, url: this.url.url, references: response.references});
      // Ensure the UI has updated before scrolling
      this.cdr.detectChanges();  // Trigger change detection
      setTimeout(() => this.scrollToBottom(), 100);  // Scroll to bottom after DOM update

    });

    // clear input value
    this.message = '';
  }

  private scrollToBottom(): void {
    try {
      this.scrollableChat.nativeElement.scrollTop = this.scrollableChat.nativeElement.scrollHeight;
    } catch (err) {
      console.error('Scroll to bottom failed:', err);
    }
  }

  sanitizeMessage(message: string): string {
    // sanitize this messge so no xss
    const sanitizedMessage = message.replace(/</g, "&lt;").replace(/>/g, "&gt;") +
      "You must include the reference numbers in your response. In the references, include the paragraph number if applicable."+
      "At the end of the response message, include a URL to the PDF you referenced if the URL begins with https://static.e-publishing.af.mil/."+
      "Do not include #toolbar=0&navpanes=0&page= at the end of the link; end the link with .pdf.";

    return sanitizedMessage;
  }

  extractUrl(message: string): Url {
    const urlRegex = /(https:\/\/static\.e-publishing\.af\.mil\/[^\s]+\.pdf)/;
    const match = message.match(urlRegex);
    if (match && match[1]) {
      const url = match[1];

      // if url contains afi36-3003 and not dafi36-3003, then replace afi36-3003 with dafi36-3003
      if (url.includes('afi36-3003') && !url.includes('dafi36-3003')) {
        const newUrl = url.replace(/afi36-3003/g, 'dafi36-3003');
        console.log("Extracted URL:", newUrl);
        return {containsUrl: true, url: newUrl}
      }

      console.log("Extracted URL:", url);
      return {containsUrl: true, url: url}
    } else {
      console.log("No URL found");
      return {containsUrl: false, url: ""}
    }
  }

  removeUrl(message: string): string {
    return message.replace(/\[.*?\]\(.*?\)/g, '');
  }
}

interface Chat{
  message: string;
  references: string;
  isUser: boolean;
  containsUrl: boolean;
  url: string
}

interface Url{
  containsUrl: boolean;
  url: string
}
