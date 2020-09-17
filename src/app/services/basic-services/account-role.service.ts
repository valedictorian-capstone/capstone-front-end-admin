import { Observable } from "rxjs";
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { AccountRoleCM, AccountRoleUM, AccountRoleVM } from "src/app/view-models";
import { environment } from "src/environments/environment";

export class AccountRoleService {
  
  public static readonly findAll = (): Observable<AccountRoleVM[]> => {
    return ajax.getJSON<AccountRoleVM[]>(`${environment.apiEndpont}${environment.api['basic-api']['account-role'].main}`);
  }

  public static readonly findById = (id: string): Observable<AccountRoleVM> => {
    return ajax.getJSON<AccountRoleVM>(`${environment.apiEndpont}${environment.api['basic-api']['account-role'].getById}${id}`);
  }

  public static readonly insert = (data: AccountRoleCM): Observable<AjaxResponse> => {
    return ajax.post(`${environment.apiEndpont}${environment.api['basic-api']['account-role'].main}`, data);
  }

  public static readonly update = (data: AccountRoleUM): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['basic-api']['account-role'].main}`, data);
  }

  public static readonly remove = (id: string): Observable<AjaxResponse> => {
    return ajax.delete(`${environment.apiEndpont}${environment.api['basic-api']['account-role'].getById}${id}`);
  }

  public static readonly active = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['basic-api']['account-role'].active}${id}`);
  }

  public static readonly deactive = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['basic-api']['account-role'].deactive}${id}`);
  }
}