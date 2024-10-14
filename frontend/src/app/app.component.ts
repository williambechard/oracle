import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import {exit, informationCircleOutline, thermometerOutline, peopleOutline, hardwareChipOutline, settingsOutline } from "ionicons/icons";
import {addIcons} from "ionicons";
import { CommonModule } from "@angular/common";


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, CommonModule],
})
export class AppComponent {
  constructor() {
    addIcons({ exit, informationCircleOutline, thermometerOutline, peopleOutline, hardwareChipOutline, settingsOutline });
  }
}
