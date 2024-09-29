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
  message: string ="";
  isLoading:boolean=false;

  constructor(private aiChatService: AiChatService) { }

  ngOnInit() {}

  submitChat() {
    console.log('chat submitted:', this.message);
    this.isLoading=true;
    // send chat to server
    this.chats.push({message: this.message, isUser: true});

    this.aiChatService.askQuestion(this.sanitizeMessage(this.message)).subscribe((response: any) => {
      console.log('response:', response);
      this.isLoading=false;
      this.chats.push({message: response.message, isUser: false});
    });

    // clear input value
    this.message = '';
  }

  sanitizeMessage(message: string): string {
    // sanitize message to prevent XSS
    return message;
  }


}

interface Chat{
  message: string;
  isUser: boolean;
}
