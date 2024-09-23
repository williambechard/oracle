import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AstroComponentsModule } from "@astrouxds/angular";
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  standalone: true,
  imports: [CommonModule, AstroComponentsModule, IonicModule]
})
export class WelcomeComponent {
  constructor(private router: Router) {}
 

  continue() {
    this.router.navigate(['/chat']);
  }



  moreInfo() {
    window.open('https://www.asksage.ai/', '_blank');
  }

}
