import { Observable } from "rxjs";
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { AccountDepartmentCM, AccountDepartmentUM, AccountDepartmentVM } from "src/app/view-models";
import { environment } from "src/environments/environment";

export class AccountDepartmentService {
  
  public static readonly findAll = (): Observable<AccountDepartmentVM[]> => {
    return ajax.getJSON<AccountDepartmentVM[]>(`${environment.apiEndpont}${environment.api['basic-api']['account-department'].main}`);
  }

  public static readonly findById = (id: string): Observable<AccountDepartmentVM> => {
    return ajax.getJSON<AccountDepartmentVM>(`${environment.apiEndpont}${environment.api['basic-api']['account-department'].getById}${id}`);
  }

  public static readonly insert = (data: AccountDepartmentCM): Observable<AjaxResponse> => {
    return ajax.post(`${environment.apiEndpont}${environment.api['basic-api']['account-department'].main}`, data);
  }

  public static readonly update = (data: AccountDepartmentUM): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['basic-api']['account-department'].main}`, data);
  }

  public static readonly remove = (id: string): Observable<AjaxResponse> => {
    return ajax.delete(`${environment.apiEndpont}${environment.api['basic-api']['account-department'].getById}${id}`);
  }

  public static readonly active = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['basic-api']['account-department'].active}${id}`);
  }

  public static readonly deactive = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['basic-api']['account-department'].deactive}${id}`);
  }
}