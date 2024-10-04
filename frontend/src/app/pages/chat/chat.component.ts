import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageModule } from "primeng/image";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { AstroComponentsModule } from "@astrouxds/angular";
import {ChatBoxComponent} from "../../components/chat-box/chat-box.component";
import {AutoFocus} from "primeng/autofocus";
import {AiChatService} from "../../services/ai-chat.service";

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
  ],
  standalone: true
})
export class ChatComponent  implements OnInit {
  chats: Chat[] = [];
  message: string = "";
  isLoading:boolean=false;
  url: Url = {containsUrl: false, url: ""};

  constructor(private aiChatService: AiChatService) { }

  ngOnInit() {}

  submitChat() {
    console.log('chat submitted:', this.message);
    this.isLoading=true;
    // send chat to server
    this.chats.push({message: this.message, isUser: true, containsUrl: false, url: ""});

    this.aiChatService.askQuestion(this.sanitizeMessage(this.message)).subscribe((response: any) => {
      console.log('response:', response);
      this.isLoading=false;
      this.url = this.extractUrl(response.message);
      this.chats.push({message: this.removeUrl(response.message), isUser: false, containsUrl: this.url.containsUrl, url: this.url.url});
    });

    // clear input value
    this.message = '';
  }

  sanitizeMessage(message: string): string {
    // sanitize message to prevent XSS
    return message;
  }

  extractUrl(message: string): Url {
    const urlRegex = /\[.*?\]\((.*?)\)/;
    const match = message.match(urlRegex);
    if (match && match[1]) {
      const url = match[1];
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
  isUser: boolean;
  containsUrl: boolean;
  url: string
}

interface Url{
  containsUrl: boolean;
  url: string
}

