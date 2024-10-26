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
  selectedModel: string = 'gpt';
  models = []

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

    this.apiService.getModels().subscribe((data: any) => {
      this.models = data.response;
      console.log('models', data);
    });

    const savedModel =  this.settingsService.getSetting('llm');
    this.selectedModel = savedModel && this.models.includes(savedModel as never)
      ? savedModel  //@ts-ignore
      : this.models.find(model => model.includes('gpt')) || 'gpt';
  }

  saveSettings(){
    this.settingsService.setSetting('llm', this.selectedModel);
    this.visible=false;
    this.onCancel.emit();
  }
}
