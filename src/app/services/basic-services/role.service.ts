import { Observable } from "rxjs";
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { RoleCM, RoleUM, RoleVM } from "src/app/view-models";
import { environment } from "src/environments/environment";

export class RoleService {
  
  public static readonly findAll = (): Observable<RoleVM[]> => {
    return ajax.getJSON<RoleVM[]>(`${environment.apiEndpont}${environment.api['basic-api']['role'].main}`);
  }

  public static readonly findById = (id: string): Observable<RoleVM> => {
    return ajax.getJSON<RoleVM>(`${environment.apiEndpont}${environment.api['basic-api']['role'].getById}${id}`);
  }

  public static readonly insert = (data: RoleCM): Observable<AjaxResponse> => {
    return ajax.post(`${environment.apiEndpont}${environment.api['basic-api']['role'].main}`, data);
  }

  public static readonly update = (data: RoleUM): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['basic-api']['role'].main}`, data);
  }

  public static readonly remove = (id: string): Observable<AjaxResponse> => {
    return ajax.delete(`${environment.apiEndpont}${environment.api['basic-api']['role'].getById}${id}`);
  }

  public static readonly active = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['basic-api']['role'].active}${id}`);
  }

  public static readonly deactive = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['basic-api']['role'].deactive}${id}`);
  }
}