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
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
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
export class SettingsComponent implements  OnInit{
  name:string="";
  @Input() visible: boolean=true;
  @Output() onCancel = new EventEmitter<void>();
  selectedTemp: number=0;
  selectedLive: boolean=false;

  constructor(private apiService: ApiService,  private settingsService : ChatSettingsService) {}


  onCancelBtn() {
    this.visible=false;
    this.onCancel.emit();
    console.log('CANCEL');
  }

  ngOnInit(): void {
    this.selectedTemp = this.settingsService.getSetting('temp') || 0;
    this.selectedLive = this.settingsService.getSetting('live') || false;
  }

  saveSettings(){
    this.settingsService.setSetting('temp', this.selectedTemp);
    this.settingsService.setSetting('live', this.selectedLive);

    this.visible=false;
    this.onCancel.emit();
  }
}
