import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AstroComponentsModule } from "@astrouxds/angular";
import { IonicModule } from '@ionic/angular';
import { UserAuthService } from '../../services/user-auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  standalone: true,
  imports: [CommonModule, AstroComponentsModule, IonicModule]
})
export class WelcomeComponent implements OnInit {

  isLoggedIn: boolean = false;

  constructor(private router: Router, private authService: UserAuthService) {}

  ngOnInit() {
    this.authService.isLoggedIn$.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  continue() {
    this.router.navigate(['/chat']);
  }

  back() {
    this.router.navigate(['/login']);
  }

  moreInfo() {
    window.open('https://www.asksage.ai/', '_blank');
  }

}
