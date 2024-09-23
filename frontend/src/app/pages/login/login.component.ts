import { Component, OnInit } from '@angular/core';
import { ImageModule } from "primeng/image";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { AstroComponentsModule } from "@astrouxds/angular";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UserAuthService } from '../../services/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    CommonModule,
    ImageModule,
    IonicModule,
    FormsModule,
    ButtonModule,
    AstroComponentsModule,
  ],
  standalone: true
})
export class LoginComponent implements OnInit {
  email: string = '';
  apiKey: string = '';
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(private userAuthService: UserAuthService, private router: Router) { }

  ngOnInit() {}

  login() {
    this.isLoading = true;
    this.errorMessage = '';

    const sanitizedEmail = this.sanitizeInput(this.email);
    const sanitizedApiKey = this.sanitizeInput(this.apiKey);

    this.userAuthService.login(sanitizedEmail, sanitizedApiKey).subscribe({
      next: (response: any) => {
        console.log('Login successful', response);
        this.isLoading = false;

        // make a test call to /ask with a prompt
        this.userAuthService.ask('Is 10 larger than 100, and why?').subscribe((response: any) => {
          console.log('Test call successful', response);
        });


        this.router.navigate(['/welcome']);
      },
      error: (error: any) => {
        console.error('Login failed', error);
        this.isLoading = false;
        if (error.error && error.error.error) {
          this.errorMessage = error.error.error;
        } else if (error.message) {
          this.errorMessage = error.message;
        } else {
          this.errorMessage = 'An unknown error occurred. Please try again.';
        }
      }
    });
  }

  private sanitizeInput(input: string): string {
    // Basic sanitization: remove HTML tags and trim whitespace
    return input.replace(/<[^>]*>?/gm, '').trim();
  }

  info() {
    this.router.navigate(['/welcome']);
  }

  clearErrorMessage() {
    this.errorMessage = '';
  }

  register() {
    window.open('https://www.asksage.ai/', '_blank');
  }
}
