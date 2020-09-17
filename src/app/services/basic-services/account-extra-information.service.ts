import { Observable } from "rxjs";
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { AccountExtraInformationCM, AccountExtraInformationUM, AccountExtraInformationVM } from "src/app/view-models";
import { environment } from "src/environments/environment";

export class AccountExtraInformationService {
  
  public static readonly findAll = (): Observable<AccountExtraInformationVM[]> => {
    return ajax.getJSON<AccountExtraInformationVM[]>(`${environment.apiEndpont}${environment.api['basic-api']['account-extra-information'].main}`);
  }

  public static readonly findById = (id: string): Observable<AccountExtraInformationVM> => {
    return ajax.getJSON<AccountExtraInformationVM>(`${environment.apiEndpont}${environment.api['basic-api']['account-extra-information'].getById}${id}`);
  }

  public static readonly insert = (data: AccountExtraInformationCM): Observable<AjaxResponse> => {
    return ajax.post(`${environment.apiEndpont}${environment.api['basic-api']['account-extra-information'].main}`, data);
  }

  public static readonly update = (data: AccountExtraInformationUM): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['basic-api']['account-extra-information'].main}`, data);
  }

  public static readonly remove = (id: string): Observable<AjaxResponse> => {
    return ajax.delete(`${environment.apiEndpont}${environment.api['basic-api']['account-extra-information'].getById}${id}`);
  }

  public static readonly active = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['basic-api']['account-extra-information'].active}${id}`);
  }

  public static readonly deactive = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['basic-api']['account-extra-information'].deactive}${id}`);
  }
}