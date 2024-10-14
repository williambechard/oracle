import {Component, OnInit, ViewChild} from '@angular/core';
import {IonFab, IonFabButton, IonicModule} from "@ionic/angular";
import {AstroComponentsModule} from "@astrouxds/angular";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {DialogModule} from "primeng/dialog";
import {NgIf} from "@angular/common";
import {LlmComponent} from "../modals/llm/llm.component";
import {SettingsComponent} from "../modals/settings/settings.component";
import {PersonaComponent} from "../modals/persona/persona.component";
import {ChatSettingsService} from "../../services/chat-settings.service";


@Component({
  selector: 'app-options-button',
  templateUrl: './options-button.component.html',
  styleUrls: ['./options-button.component.scss'],
  imports: [
    IonicModule,
    AstroComponentsModule,
    DialogModule,
    NgIf,
    LlmComponent,
    SettingsComponent,
    PersonaComponent
  ],
  animations: [
    trigger('animation', [
      state('start', style({ opacity: 1 })),
      transition('void => start', [style({ opacity: 0 }), animate('300ms')]),
    ])
  ],
  standalone: true
})
export class OptionsButtonComponent  implements OnInit {
  isLLMVisible: boolean = false;
  isSettingsVisible: boolean = false;
  isPersonaVisible: boolean = false;
  @ViewChild('closeOptions', { static: false }) closeOptionsButton: IonFabButton | undefined;
  constructor() {}

  ngOnInit() {}

  onPressLLM(event: MouseEvent) {
     console.log('Options button pressed', event);
     this.isLLMVisible = true;
     event.preventDefault();
     event.stopImmediatePropagation();
    this.closeFab();
  }

  onPressPersona(event: MouseEvent) {
    console.log('Options button pressed', event);
    this.isPersonaVisible = true;
    event.preventDefault();
    event.stopImmediatePropagation();
    this.closeFab();
  }

  onPressSettings(event: MouseEvent) {
    console.log('Options button pressed', event);
    this.isSettingsVisible = true;
    event.preventDefault();
    event.stopImmediatePropagation();
    this.closeFab();
  }

  closeFab() {
      if (this.closeOptionsButton) {
        // @ts-ignore
        this.closeOptionsButton.el.click();
      }
  }



}
