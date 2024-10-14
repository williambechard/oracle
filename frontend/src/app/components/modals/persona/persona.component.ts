import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ApiService} from "../../../services/api/api.service";
import {AstroComponentsModule} from "@astrouxds/angular";
import {CarouselModule, CarouselPageEvent} from "primeng/carousel";
import {ChatSettingsService} from "../../../services/chat-settings.service";

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss'],
  imports: [
    AstroComponentsModule,
    CarouselModule
  ],
  standalone: true
})
export class PersonaComponent   implements  OnInit{
  name:string="";
  currentPage: number = 0;
  @Input() visible: boolean=true;
  selectedContext = 'any';
  @Output() onCancel = new EventEmitter<void>();

  personaContexts=[
   'USSF Officer', 'USSF Enlisted', 'USSF Civilian', 'USAF Officer', 'USAF Enlisted', 'USAF Civilian', 'any'  ];

  constructor(private apiService: ApiService, private settingsService : ChatSettingsService) {}


  onCancelBtn() {
    this.visible=false;
    this.onCancel.emit();
    console.log('CANCEL');
  }

  ngOnInit(): void {
    this.selectedContext = this.settingsService.getSetting('context') || 'any';
    this.currentPage = this.personaContexts.indexOf(this.selectedContext);
  }

  saveSettings(){
    this.settingsService.setSetting('context', this.personaContexts[this.currentPage]);
    this.visible=false;
    this.onCancel.emit();
  }

  onPage(event: CarouselPageEvent) {
    this.currentPage = event.page ?? 0;
    console.log('event ', event);
  }
}
