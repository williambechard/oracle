import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageModule } from 'primeng/image';
import { IonicModule } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
import {RefLineComponent} from "../ref-line/ref-line.component";

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss'],
  standalone: true,
  imports: [CommonModule, ImageModule, IonicModule, RefLineComponent]
})
export class ChatBoxComponent implements OnInit {
  @Input() message: string = '';
  @Input() isUser: boolean = false;
  @Input() containsUrl: boolean = false;
  @Input() url: string = '';
  @Input() references: string = '';

  referenceArray:Reference[]=[];
  referencesFormatted: string = '';
  messageFormatted: string = '';
  messageURL: string = '';
  messageRef: number[] = [];

  colors: string[] = [
    '#8A6DC1',
    '#CB7E45',
    '#D1A34E',
    '#5A7F8A',
  ];

  constructor(private sanitizer: DomSanitizer) {}

  // Function to format message text so that when a number in [] is found, it is replaced with the matching reference link
  formatMessage = (input: string): string => {
  const match = input.match(/https?:\/\/[^\s]+/g);
  this.messageURL = match ? match.join(', ') : '';
    console.log('messageURL', this.messageURL);

    const referencePattern = /\[(\d+(?:,\s*\d+)*)\]/g;
    let formattedMessage = input.replace(referencePattern, (match, refNums) => {
      return refNums.split(',').map((refNum :any) => {
        const trimmedRefNum = refNum.trim();
        const colorIndex = (parseInt(trimmedRefNum) - 1) % this.colors.length;
      const color = this.colors[colorIndex];
        this.messageRef.push(parseInt(trimmedRefNum)); // Add ref number to this.messageRef
        return `<span class="reference-link" (click)="toggleReference('${trimmedRefNum}')" style="color: ${color};">[${trimmedRefNum}]</span>`;
      }).join(', ');
    });

    // Replace \n\n with <br><br> for HTML rendering
    formattedMessage = formattedMessage.replace(/\n\n/g, '<br><br>');

    return formattedMessage;
  }

  // Function to process references and metadata
  formatReferences = (input: string): string => {
    const referencePattern = /\[(\d+)\](.+?)Metadata: \{"filename": "(.+?)", "page_number": (\d+)\}/g;
    this.referenceArray = [];
    let result = input.replace(referencePattern, (match, refNum, content, filename, pageNumber) => {
      const colorIndex = (parseInt(refNum) - 1) % this.colors.length;
      const color = this.colors[colorIndex];
      this.referenceArray.push({ refNum, content, filename, pageNumber, url: '' });
      return `
        <p class="ref-header" >
          <div class='ref-btn' (click)="toggleReference('${refNum}')" style="color: ${color}; display:inline-block; font-size:1.75rem">[${refNum}]</div>
          <span  class="reference-link"  id="ref-summary-${refNum}" style="font-size:1.75rem">${filename}, Page: ${pageNumber}</span>
        </p>
        <div id="ref-${refNum}" class="metadata" style="display: none;">
          <p>${content.trim()}</p>
        </div>
      `;
    });

    console.log('ref array before diff, if there is a diff', this.referenceArray);

    if(this.referenceArray.length==0){
      console.log('diff pattern');
      // try again with different pattern
      const referencePattern = /\[(\d+)\] Article Title: (.+?) - Link: (https:\/\/[^\s]+) - Article Description: (.+?)(?=\[\d+\]|$)/gs;
      result = input.replace(referencePattern, (match, refNum, content, url, pageNumber) => {
        const colorIndex = (parseInt(refNum) - 1) % this.colors.length;
        const color = this.colors[colorIndex];
        this.referenceArray.push({
          refNum,
          content: pageNumber,
          filename: content,
          pageNumber: "0",
          url
        });
        return `
        <p class="ref-header" >
          <div class='ref-btn' (click)="toggleReference('${refNum}')" style="color: ${color}; display:inline-block; font-size:1.75rem">[${refNum}]</div>
          <span  class="reference-link"  id="ref-summary-${refNum}" style="font-size:1.75rem">${content}, Page: 0</span>
        </p>
        <div id="ref-${refNum}" class="metadata" style="display: none;">
          <p>${pageNumber.trim()}</p>
        </div>
      `;
      });
    }

    console.log('ref array ', this.referenceArray);

    return result;
  }


  showReference(){
    console.log('referenceArray', this.referenceArray);
  }

  modifyURL(name: string): string {
    // if messageURL contains name then return messageURL
    if (this.messageURL.includes(name)) {
      return this.messageURL;
    }else return '';
  }

  toggleReference(refNum: string): void {
    const refElement = document.getElementById(`ref-${refNum}`);
    console.log('refElement', refElement);
    if (refElement) {
      const isHidden = refElement.style.display === 'none';
      refElement.style.display = isHidden ? 'block' : 'none';
    }
  }

  ngOnInit(): void {
    console.log('this.references', this.references);
    this.referencesFormatted = this.sanitizer.bypassSecurityTrustHtml(
      this.formatReferences(this.references)
    ) as string;

    this.messageFormatted = this.sanitizer.bypassSecurityTrustHtml(
      this.formatMessage(this.message)
    ) as string;

    console.log('referenceArray', this.referenceArray);
    console.log('referencesFormatted', this.referencesFormatted);
    console.log('containsUrl', this.containsUrl);
    console.log('url', this.url);
    console.log('references', this.references);

    // remove from refereceArray if refNum is not in messageRef
    if (this.messageRef.length > 0) {
      const oldRef = this.referenceArray;
      this.referenceArray = this.referenceArray.filter(ref => this.messageRef.includes(parseInt(ref.refNum)));
      if(this.referenceArray.length==0){
        this.referenceArray=oldRef;
      }
    }

  }
}


export interface Reference{
  refNum:string,
  content:string,
  filename:string,
  url:string,
  pageNumber:string,
}
