import { Component, OnInit } from '@angular/core';
import {ImageModule} from "primeng/image";
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";
import {Button, ButtonModule} from "primeng/button";
import {AstroComponentsModule} from "@astrouxds/angular";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    ImageModule,
    IonicModule,
    FormsModule,
    ButtonModule,
    Button,
    AstroComponentsModule
  ],
  standalone: true
})
export class LoginComponent  implements OnInit {
  email: any;
  apiKey: any;

  constructor() { }

  ngOnInit() {}

  login() {

  }

  info() {

  }
}
