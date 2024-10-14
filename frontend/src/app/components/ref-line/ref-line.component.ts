import {Component, Input, OnInit} from '@angular/core';
import {Reference} from "../chat-box/chat-box.component";
import {IonicModule} from "@ionic/angular";
import {NgClass, NgIf} from "@angular/common";
import {SafeUrlPipe} from "../../pipes/SafeUrlPipe";
import {PdfViewerModule} from "ng2-pdf-viewer";

@Component({
  selector: 'app-ref-line',
  templateUrl: './ref-line.component.html',
  styleUrls: ['./ref-line.component.scss'],
  imports: [
    IonicModule,
    NgClass,
    SafeUrlPipe,
    NgIf,
    PdfViewerModule
  ],
  standalone: true
})
export class RefLineComponent  implements OnInit {
  @Input() reference!: Reference;
  @Input() pageNum: string = '0';
  @Input() refURL :string|undefined =undefined;

  pdfFound: boolean = false;
  pdfURL: string | undefined = undefined;
  showPDF :boolean=false;
  validPDF: boolean = false;

  constructor() { }

  ngOnInit() {
    // construct pdfULR with refURL + '#toolbar=0&navpanes=0&page=' + pageNum | safeUrl
    this.pdfURL = this.refURL && this.refURL.startsWith('https://static.e-publishing.af.mil/') ? this.refURL + '#toolbar=0&navpanes=0&page=' + this.pageNum : undefined;
  }

  onPDFLoad(event: any) {
    console.log('pdf loaded', event);
    this.validPDF = true;
  }
}
