import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DialogModule} from "primeng/dialog";
import {Button} from "primeng/button";
import {FormsModule} from "@angular/forms";
import {AstroComponentsModule} from "@astrouxds/angular";
import {IonicModule, ModalController} from "@ionic/angular";
import {InputTextModule} from "primeng/inputtext";
import {ApiService} from "../../../services/api/api.service";
import {NgForOf} from "@angular/common";
import {ChatSettingsService} from "../../../services/chat-settings.service";



@Component({
  selector: 'app-llm',
  templateUrl: './llm.component.html',
  styleUrls: ['./llm.component.scss'],
  imports: [
    DialogModule,
    Button,
    FormsModule,
    AstroComponentsModule,
    IonicModule,
    InputTextModule,
    NgForOf,
  ],
  standalone: true
})
export class LlmComponent implements  OnInit{
  name:string="";
  @Input() visible: boolean=true;
  @Output() onCancel = new EventEmitter<void>();
  selectedModel: string = 'gpt-3.5-turbo';
  models = ["cohere", "mpt-7b-chat", "claude2", "claude-3-opus", "claude-3-sonnet", "llma3", "aws-bedrock-titan", "google-bison", "google-gemini-pro", "mistral-large", "openai_gpt",
    "gpt4", "gpt4-32k", "gpt4-vision", "gpt35-16k", "gpt-gov", "gpt4-gov", "dall-e-2", "dall-e-3", "davinci"]

  constructor(private apiService: ApiService, private settingsService : ChatSettingsService) {}

  onCancelBtn() {
    this.visible=false;
    this.onCancel.emit();
    console.log('CANCEL');
  }

  ngOnInit(): void {
    this.apiService.getPlugins().subscribe((data: any) => {
      console.log('plugins', data);
    });
    this.selectedModel = this.settingsService.getSetting('llm') || 'gpt-3.5-turbo';
  }

  saveSettings(){
    this.settingsService.setSetting('llm', this.selectedModel);
    this.visible=false;
    this.onCancel.emit();
  }
}
