import { Observable } from "rxjs";
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { AccountExtraDataCM, AccountExtraDataUM, AccountExtraDataVM } from "src/app/view-models";
import { environment } from "src/environments/environment";

export class AccountExtraDataService {
  
  public static readonly findAll = (): Observable<AccountExtraDataVM[]> => {
    return ajax.getJSON<AccountExtraDataVM[]>(`${environment.apiEndpont}${environment.api['basic-api']['account-extra-data'].main}`);
  }

  public static readonly findById = (id: string): Observable<AccountExtraDataVM> => {
    return ajax.getJSON<AccountExtraDataVM>(`${environment.apiEndpont}${environment.api['basic-api']['account-extra-data'].getById}${id}`);
  }

  public static readonly insert = (data: AccountExtraDataCM): Observable<AjaxResponse> => {
    return ajax.post(`${environment.apiEndpont}${environment.api['basic-api']['account-extra-data'].main}`, data);
  }

  public static readonly update = (data: AccountExtraDataUM): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['basic-api']['account-extra-data'].main}`, data);
  }

  public static readonly remove = (id: string): Observable<AjaxResponse> => {
    return ajax.delete(`${environment.apiEndpont}${environment.api['basic-api']['account-extra-data'].getById}${id}`);
  }

  public static readonly active = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['basic-api']['account-extra-data'].active}${id}`);
  }

  public static readonly deactive = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['basic-api']['account-extra-data'].deactive}${id}`);
  }
}