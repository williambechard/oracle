import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatSettingsService {
  private settings: { [key: string]: any } = {};

  constructor() {}

  setSetting(key: string, value: any): void {
    this.settings[key] = value;
    // Optionally, you can also save to local storage or another storage solution
    localStorage.setItem(key, JSON.stringify(value));
  }

  getSetting(key: string): any {
    // Retrieve from local storage if needed
    const savedValue = localStorage.getItem(key);
    return savedValue ? JSON.parse(savedValue) : this.settings[key];
  }


}
