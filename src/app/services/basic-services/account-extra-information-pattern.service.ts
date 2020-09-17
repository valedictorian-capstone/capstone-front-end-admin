import { Observable } from "rxjs";
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { AccountExtraInformationPatternCM, AccountExtraInformationPatternUM, AccountExtraInformationPatternVM } from "src/app/view-models";
import { environment } from "src/environments/environment";

export class AccountExtraInformationPatternService {
  
  public static readonly findAll = (): Observable<AccountExtraInformationPatternVM[]> => {
    return ajax.getJSON<AccountExtraInformationPatternVM[]>(`${environment.apiEndpont}${environment.api['basic-api']['account-extra-information-pattern'].main}`);
  }

  public static readonly findById = (id: string): Observable<AccountExtraInformationPatternVM> => {
    return ajax.getJSON<AccountExtraInformationPatternVM>(`${environment.apiEndpont}${environment.api['basic-api']['account-extra-information-pattern'].getById}${id}`);
  }

  public static readonly insert = (data: AccountExtraInformationPatternCM): Observable<AjaxResponse> => {
    return ajax.post(`${environment.apiEndpont}${environment.api['basic-api']['account-extra-information-pattern'].main}`, data);
  }

  public static readonly update = (data: AccountExtraInformationPatternUM): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['basic-api']['account-extra-information-pattern'].main}`, data);
  }

  public static readonly remove = (id: string): Observable<AjaxResponse> => {
    return ajax.delete(`${environment.apiEndpont}${environment.api['basic-api']['account-extra-information-pattern'].getById}${id}`);
  }

  public static readonly active = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['basic-api']['account-extra-information-pattern'].active}${id}`);
  }

  public static readonly deactive = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['basic-api']['account-extra-information-pattern'].deactive}${id}`);
  }
}