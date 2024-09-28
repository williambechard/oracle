import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageModule } from "primeng/image";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { AstroComponentsModule } from "@astrouxds/angular";
import {ChatBoxComponent} from "../../components/chat-box/chat-box.component";
import {AutoFocus} from "primeng/autofocus";

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

  constructor() { }

  ngOnInit() {}

}
