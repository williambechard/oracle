import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {BehaviorSubject, Observable, of, throwError} from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { Platform } from '@angular/cdk/platform';
import {ChatSettingsService} from "../chat-settings.service";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();
  private token: string | null = null;
  private apiUrl =  '';



  constructor(private http: HttpClient, private platform: Platform, private chatSettingsService: ChatSettingsService) {
    if (this.platform.ANDROID || this.platform.IOS) this.apiUrl = 'http://10.0.2.2:5001';
     else this.apiUrl = 'http://localhost:5001';
  }



  login(email: string, apiKey: string): Observable<any> {
    return this.http.post('https://api.asksage.ai/user/get-token-with-api-key', { email, 'api_key': apiKey }).pipe(
      map((data: any) => {
        console.log('response ', data);
        if (data && data.response.access_token) {
          this.token = data.response.access_token;
          this.isLoggedInSubject.next(true);

          //successful login, so store email and api-key securely locally to be used for auto-login
          localStorage.setItem('email', email);
          localStorage.setItem('api-key', apiKey);

          return data.response;
        } else {
          throw new Error('Access token not found in response');
        }
      }),
      catchError(this.handleError)
    );
  }

  logout(): void {
    this.token = null;
    this.isLoggedInSubject.next(false);
  }

  getToken(): string | null {
    return this.token;
  }


  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown Error';
    if (error.status) {
      errorMessage = `Error: ${error.status}`;
    }
    console.error('Full error response:', error);
    return throwError(() => new Error(errorMessage));
  }

  getPlugins(){
    const token = this.getToken();

    if (!token) {
      throw new Error('Token is missing');
    }

    return this.http.post('https://api.asksage.ai/server/get-plugins', {}, {
      headers: { 'x-access-tokens': token }
    }).pipe(
      catchError(this.handleError)
    );
  }

  countMonthlyTokens(): Observable<any> {
    const token = this.getToken();

    if (!token) {
      throw new Error('Token is missing');
    }



    return this.http.post('https://api.asksage.ai/server/count-monthly-tokens', {}, { headers: { 'x-access-tokens': token }}).pipe(
      catchError(this.handleError)
    );
  }

  getModels(){
    const token = this.getToken();

    if (!token) {
      throw new Error('Token is missing');
    }

    return this.http.post('https://api.asksage.ai/server/get-models', {}, {
      headers: { 'x-access-tokens': token }
    }).pipe(
      catchError(this.handleError)
    );
  }

  ask(content: { message: string; persona?: string; system_prompt?: string; dataset?: string; limit_references?: number; temperature?: number; live?: number; model?: string }): Observable<any> {
    const token = this.getToken();


    const isOffline = true;
    if(!isOffline) {
      const contentWithSettings = {
        ...content,
        temperature: this.chatSettingsService.getSetting('temp') / 100 || 0,
        live: this.chatSettingsService.getSetting('live') || 0,
        model: this.chatSettingsService.getSetting('llm') || 'gpt-3.5-turbo',
        message: content.message + 'answer in the context of ' + (this.chatSettingsService.getSetting('context') || 'any')
      };

      console.log('contentWithSettings', contentWithSettings);

      if (!token) {
        throw new Error('Token is missing');
      }

      return this.http.post('https://api.asksage.ai/server/query', contentWithSettings, {
        headers: {'x-access-tokens': token}
      }).pipe(
        catchError(this.handleError)
      );
    }
    else{
      return of({
        message: "In the context of the United States Air Force (USAF) for enlisted members, you are allowed to carry over a maximum of 60 days of leave from one fiscal year to the next. This is unless you are authorized Special Leave Accrual (SLA) which may allow you to carry over more than 60 days [1][2]. \n\nFor more detailed information, you can refer to the Department of the Air Force Instruction (DAFI) 36-3003 document available at: https://static.e-publishing.af.mil/production/1/af_a1/publication/dafi36-3003/dafi36-3003.pdf.",
        references: '[1] ary for the purpose of an active duty retirement. (T-1) - 7.9.2.3. Members may not carry more than 60 days of leave from one fiscal year to the next unless authorized SLA (See Chapter 6). (T-0) - 7.9.2.4. Members transferring from the RegAF to the ARC may carry over their leave for use during a future active duty tour. - 7.9.2.4.1. RegAF leave cannot be used when a service member transfers to an ARC Traditional Reservist, Air Reserve Technician, Individual Reservist, ANG Technician, or Drill Status Guardsman position until they are put into an active duty status. (T-1) - 7.9.2.4.2. Members must settle their leave balances using the AF Form 1089 prior to transferring statuses. (T-1) - 7.9.2.5. Sell back of carryover leave will be limited to 60 days per career (not including excepted leave). For additional details on selling back leave, contact servicing Military Personnel Section (MPS) or visit MyFSS to download the leave PSDG. (T-1) - 7.9.3. Tracking Payout of Carryover Leave. - 7.9.3.1. Carryover leave is tracked via the Defense Finance and Accounting Service and Defense Joint Military Pay System. - 7.9.3.2. Leave earned in one active duty status may be authorized and taken in a different active duty status funded by a distinct and different appropriation to include AGR, statutory tour, or ADOS. - 7.9.3.3. When a member has a leave balance at the end of the tour and does not elect to carry it forward utilizing a 1089 prior to the orders end date, that leave will be sold and paid to the member. (T-2) See AFMAN 65-116 Vol 3, Defense Joint Military Pay System - Metadata: {"filename": "dafi36-3003.pdf", "page_number": 64}\n[2] e office for verification documentation (e.g., Defense Finance and Accounting Service, Defense Joint Military Pay System, previous orders) reflecting the member’s previous leave balance(s). (T-3) - 63 - 64 - DAFI36-3003 7 AUGUST 2024 - 7.9.1.3. If the gaining commander approves, the carryover leave days will be included as part of the overall tour length and carryover leave will be taken during that tour. (T-3) Example for RC only: RC member agrees to a 60-day tour and asks to use 10 days of carryover leave. Commander approves an overall 70-day tour length that includes authorized travel, duty time, annual leave accrued during the tour (5 days) and the 10 days of carryover leave. - 7.9.1.4. The gaining commander has discretion to approve and cancel approved leave if mission or circumstances (e.g., disciplinary actions) dictate. - 7.9.1.5. If the request that led to approved leave is withdrawn by the member, or the commander cancels previously approved carryover leave, the unused carryover leave is credited back to the member’s leave balance and tour length adjusted. - 7.9.1.6. When a member does not take leave during a tour of duty and chooses not to sell it, this leave may be carried forward to a future active-duty long tour. - 7.9.1.7. ARC AGR orders will not be extended to account for carryover leave. (T-1) - 7.9.2. Carryover Leave Limitations. - 7.9.2.1. Members will not take carryover leave in conjunction with an annual tour. (T-1) - 7.9.2.2. Members cannot use carryover leave to justify entering sanctuary for the purpose of an active duty retirement. (T-1) - 7.9.2.3. Members may not carry more than 60 days of leave from one fiscal year to the next unless authorized SLA (See Chapter 6). (T-0) - 7.9.2.4. - Metadata: {"filename": "dafi36-3003.pdf", "page_number": 64}\n[3] gible Airmen and Guardians in a CZTE and 10 USC §§ 12301(a), 12302, or 12304 RC Airmen outside the US (non-CZTE area). ........ - Attachment 1—GLOSSARY OF REFERENCES AND SUPPORTING INFORMATION - 5 - 69 - 70 - 6 - DAFI36-3003 7 AUGUST 2024 - Chapter 1 - OVERVIEW - 1.1. Overview. This instruction is the authority for chargeable and non-chargeable leave, as well as liberty (regular pass). It also is the authority unit commanders use to grant a 3- or 4-day special pass for special occasions and circumstances. - 1.2. Roles and Responsibilities. - 1.2.1. Air Force Military Compensation Policy Division (AF/A1PA). Develops and maintains personnel guidance for the administration of the military leave program. - 1.2.2. Air Force Personnel Center Commander (AFPC/CC). - 1.2.2.1. Works directly with Air Force Military Compensation Policy Division (AF/A1PA) and Space Force Military Compensation and Benefits Policy Division (SF/S1PA) to support program administration. - 1.2.2.2. Implements military leave program policy as outlined in this instruction and in conjunction with other offices as appropriate. - 1.2.3. Major Command Manpower, Personnel and Services (MAJCOM/A1), Direct Reporting Unit (DRU)/A1 or equivalent. - 1.2.3.1. Ensures subordinate units receive updates/changes to the military leave program. - 1.2.3.2. Air Force Reserve Command Force Management (AFRC/A1KK) will disseminate guidance to subordinate units. - 1.2.3.3. National Guard Bureau Manpower, Personnel and Services (NGB/A1) ensures guidance is disseminated and implemented by states/wings. - 1.2.3.4. Grants extensions for unfunded Environmental and Morale Leave. - 1.2.3.5. A DoD Management or Supporting Activity, as defined in DoDI 5100.73, Major DoD Headquarters Activities, - Metadata: {"filename": "dafi36-3003.pdf", "page_number": 6}\n[4] ve on DAF Form 988, Leave/Request Authorization when a unit does not have a Unit Leave Monitor. - 1.2.5.2. Advises members of limitation on total of 60 days of leave that can be sold back in a career. - DAFI36-3003 7 AUGUST 2024 - 1.2.5.3. Ensures members sign statements of understanding that they normally do not return to duty when terminal leave begins. Exception: Unit commanders may recall members from leave due to military necessity or urgent, unforeseen circumstances. - 1.2.5.4. Ensures members do not change established dates of separation for the purpose of taking unused leave. - 1.2.5.5. Ensures members remain assigned to their organizations until they separate or retire. - 1.2.6. Unit/Squadron Commanders or Equivalents. - 1.2.6.1. Establish annual leave programs to give members opportunity to use leave. - 1.2.6.2. Enforce Air Force and Space Force command-approved leave guidelines. - 1.2.6.3. Make sure members who refuse to take leave understand their obligation to comply with unit leave programs and that refusal to take leave may result in the loss of earned leave at a later date. - 1.2.6.4. Instruct members to schedule leave within operational requirements and follow their leave schedule. - 1.2.6.5. Encourage members to use accrued leave and take at least 14 continuous days each fiscal year whenever possible. - 1.2.6.6.\n[5] ly continued on, or are recalled to, active duty may have their leave, which accumulated during\n',
        added_obj: null,
        embedding_down: false,
         response: "OK",
        status: 200,
        tool_calls: null,
        type: "completion",
        usage: null,
        uuid: "2605f703-7be2-4113-a97f-229ea1bac3c7",
        vectors_down: false,
      });
    }
  }





  addDataset(email: string, apiKey: string, dataset: string): Observable<any> {
    const token = this.getToken();

    if (!token) {
      throw new Error('Token is missing');
    }

    return this.http.post('https://api.asksage.ai/user/add-dataset', { dataset }, {
      headers: { 'x-access-tokens': token }
    }).pipe(
      catchError(this.handleError)
    );
  }



}
