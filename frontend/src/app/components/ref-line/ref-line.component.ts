import {Component, Input, OnInit} from '@angular/core';
import {Reference} from "../chat-box/chat-box.component";
import {IonicModule} from "@ionic/angular";
import {NgClass, NgIf} from "@angular/common";
import {SafeUrlPipe} from "../../pipes/SafeUrlPipe";
import {PdfViewerModule} from "ng2-pdf-viewer";
import {JsonFilesService} from "../../services/url-lookup.service";

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
  link1: string ='';
  link2: string ='';
  modContent:string='';

  validLink: number = -1;

  constructor(private jsonService: JsonFilesService) { }

  ngOnInit() {
    // construct pdfULR with refURL + '#toolbar=0&navpanes=0&page=' + pageNum | safeUrl
    // this.pdfURL = this.refURL && this.refURL.startsWith('https://static.e-publishing.af.mil/') ? this.refURL + '#toolbar=0&navpanes=0&page=' + this.pageNum : undefined;
    // this.pdfURL = this.pdfURL ? `https://static.e-publishing.af.mil/production/1/af_a1/publication/${this.pdfURL}/${this.pdfURL}.pdf` : undefined;
    // console.log('this.pdfURL', this.pdfURL);
    this.modContent=this.addLineBreaks(this.reference.content);

    const discoveredURL = this.jsonService.getUrlDictionary()[this.reference.filename];
    console.log('discovered url', discoveredURL);
    if(discoveredURL){
      this.pdfFound = true
      this.refURL =discoveredURL;
    }else{
      this.pdfFound = false
      this.refURL = `https://www.e-publishing.af.mil/Product-Index/#/?view=search&keyword=${this.reference.filename}&isObsolete=false&modID=449&tabID=131`
    }


  }

  addLineBreaks(text: string): string {
    // Replace patterns where we want to add a line break and use <br> for HTML rendering
    return text
      .replace(/ - /g, '<br>- ')             // Add <br> before a hyphen
      .replace(/\. /g, '.<br>')              // Add <br> after a period followed by a space
      .replace(/; /g, ';<br>')               // Add <br> after a semicolon followed by a space
      .replace(/: /g, ':<br>')               // Add <br> after a colon followed by a space
      .replace(/(T-\d)\)/g, '$1)<br>');      // Add <br> after certain patterns like (T-0)
  }

  onPDFLoad(event: any) {
    console.log('pdf loaded', event);
    this.validPDF = true;
    console.log('valid pdf ', this.validPDF);
  }

  onPDFLink1Load(event: Event) {
    console.log('pdf link 1 loaded', event);
    this.validLink=1;
  }

  onPDFLink2Load(event: Event) {
    console.log('pdf link 2 loaded', event);
    this.validLink=2;
  }
}
