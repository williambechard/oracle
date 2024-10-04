import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImageModule} from "primeng/image";
import {IonicModule} from "@ionic/angular";

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss'],
  standalone: true,
  imports: [CommonModule, ImageModule, IonicModule]
})
export class ChatBoxComponent {
  @Input() message: string = '';
  @Input() isUser: boolean = false;
  @Input() containsUrl: boolean = false;
  @Input() url: string = '';
}
