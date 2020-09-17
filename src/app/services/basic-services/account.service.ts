import { Observable } from "rxjs";
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { AccountCM, AccountUM, AccountVM } from "src/app/view-models";
import { environment } from "src/environments/environment";

export class AccountService {
  
  public static readonly findAll = (): Observable<AccountVM[]> => {
    return ajax.getJSON<AccountVM[]>(`${environment.apiEndpont}${environment.api['basic-api']['account'].main}`);
  }

  public static readonly findById = (id: string): Observable<AccountVM> => {
    return ajax.getJSON<AccountVM>(`${environment.apiEndpont}${environment.api['basic-api']['account'].getById}${id}`);
  }

  public static readonly insert = (data: AccountCM): Observable<AjaxResponse> => {
    return ajax.post(`${environment.apiEndpont}${environment.api['basic-api']['account'].main}`, data);
  }

  public static readonly update = (data: AccountUM): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['basic-api']['account'].main}`, data);
  }

  public static readonly remove = (id: string): Observable<AjaxResponse> => {
    return ajax.delete(`${environment.apiEndpont}${environment.api['basic-api']['account'].getById}${id}`);
  }

  public static readonly active = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['basic-api']['account'].active}${id}`);
  }

  public static readonly deactive = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['basic-api']['account'].deactive}${id}`);
  }
}