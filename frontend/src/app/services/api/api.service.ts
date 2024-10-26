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

    const isOffline = false;

    if(!isOffline) {
      const contentWithSettings = {
        ...content,
        temperature: this.chatSettingsService.getSetting('temp') / 100 || 0,
        live: this.chatSettingsService.getSetting('live') || 0,
        model: this.chatSettingsService.getSetting('llm') || 'gpt',
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
        references: "[1] Article Title: Pay Frequency Requirements by State + Federal Laws - Patriot Software. - Link: https://www.patriotsoftware.com/blog/payroll/pay-frequency-requirements-state-federal/ - Article Description: Semimonthly: Twice per month (24 paychecks per year) Monthly: Once per month (12 paychecks per year) You can always pay employees more frequently than the state requires. For example, if the state requires a semimonthly payroll, you can also pay employees biweekly and weekly. Just make sure you pay employees at least semimonthly.. - \n[2] Article Title: State Payday Requirements - U.S. Department of Labor. - Link: https://www.dol.gov/agencies/whd/state/payday - Article Description: Each employee who is exempt from the overtime provisions of the federal Fair Labor Standards Act (FLSA) must be paid at least once a month; others must be paid at least twice a month. Semi-monthly pay periods must contain as nearly as possible an equal number of days. ... Employees on a yearly salary can be paid on a monthly basis. 23 Vermont .... - \n[3] Article Title: 3 Reasons Why Getting Paid Once a Month Instead of Twice a Month Works .... - Link: https://clark.com/personal-finance-credit/budgeting-saving/3-reasons-why-getting-paid-once-a-month/ - Article Description: Here are three reasons why getting paid once a month works for me. 1. I Get All of My Bills Out of the Way, Right Away. Getting paid monthly forces me to pay my bills first. No longer can I push off the cell phone bill, figuring that I can “catch it next paycheck.”.. - \n[4] Article Title: Monthly Payroll: Exploring the Pros and Cons of Once-a-Month Pay. - Link: https://activitycovered.com/is-it-better-to-be-paid-once-a-month/ - Article Description: Here are three reasons why getting paid once a month works for me. 1. I Get All of My Bills Out of the Way, Right Away Getting paid monthly forces me to pay my bills first. No longer can I push off the cell phone bill, figuring that I can “catch it next paycheck.”.. - \n[5] Article Title: The Tax Implications of Being Paid Once a Month | Pocketsense. - Link: https://pocketsense.com/tax-implications-being-paid-once-month-12044529.html - Article Description: The balance of your income ($20,200 annually or $1,683.33 a month) would be taxed at the rate of 12 percent: $2,424 a year, or $202 a month. Your total tax liability would therefore be $3,524 a year or about $293 a month. The same equation would apply if you were paid weekly, but your annual pay and tax bracket percentages would be divided by .... - \n[6] Article Title: DFARS Section 204.7108  Payment instructions. - Link: https://www.acquisition.gov - Article: 204.7108 Payment instructions. - Follow the procedures at PGI 204.7108 for inclusion of payment instructions in contracts. - Parent topic: - Subpart 204.71 - UNIFORM CONTRACT LINE ITEM NUMBERING SYSTEM - Initial Context: - This content is from the Acquisition.gov Official Government website and covers Defense Federal Acquisition Regulation Supplement (DFARS) Sections, https://www.acquisition.gov - Source: Acquisition.gov - \n[7] Article Title: DFARS Section F-102  Applicability. - Link: https://www.acquisition.gov - Article: F-102 Applicability. - (a) DFARS 252.232-7003 , Electronic Submission of Payment Requests and Receiving Reports, requires payment requests and receiving reports using WAWF in nearly all cases. - (b) When DoD provides quality assurance or acceptance services for non-DoD activities, prepare a MIRR using the instructions in this appendix, unless otherwise specified in the contract. - Parent topic: - Part 1 -INTRODUCTION - Initial Context: - This content is from the Acquisition.gov Official Government website and covers Defense Federal Acquisition Regulation Supplement (DFARS) Sections, https://www.acquisition.gov - Source: Acquisition.gov - \n[8] Article Title: DFARS Section 252.204-7006  Billing Instructions. - Link: https://www.acquisition.gov - Article: 252.204-7006 Billing Instructions. - As prescribed in 204.7109 (b), use the following clause: - BILLING INSTRUCTIONS (OCT 2005) - When submitting a request for payment, the Contractor shall— - (a) Identify the contract line item(s) on the payment request that reasonably reflect contract work performance; and - (b) Separately identify a payment amount for each contract line item included in the payment request. - (End of clause) - Parent topic: - 252.204 RESERVED - Initial Context: - This content is from the Acquisition.gov Official Government website and covers Defense Federal Acquisition Regulation Supplement (DFARS) Sections, https://www.acquisition.gov - Source: Acquisition.gov - \n",
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
