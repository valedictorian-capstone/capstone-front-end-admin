import { Observable } from "rxjs";
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { RolePermissionCM, RolePermissionUM, RolePermissionVM } from "src/app/view-models";
import { environment } from "src/environments/environment";

export class RolePermissionService {
  
  public static readonly findAll = (): Observable<RolePermissionVM[]> => {
    return ajax.getJSON<RolePermissionVM[]>(`${environment.apiEndpont}${environment.api['bpmn-api']['role-permission'].main}`);
  }

  public static readonly findById = (id: string): Observable<RolePermissionVM> => {
    return ajax.getJSON<RolePermissionVM>(`${environment.apiEndpont}${environment.api['bpmn-api']['role-permission'].getById}${id}`);
  }

  public static readonly insert = (data: RolePermissionCM): Observable<AjaxResponse> => {
    return ajax.post(`${environment.apiEndpont}${environment.api['bpmn-api']['role-permission'].main}`, data);
  }

  public static readonly update = (data: RolePermissionUM): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['bpmn-api']['role-permission'].main}`, data);
  }

  public static readonly remove = (id: string): Observable<AjaxResponse> => {
    return ajax.delete(`${environment.apiEndpont}${environment.api['bpmn-api']['role-permission'].getById}${id}`);
  }

  public static readonly active = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['bpmn-api']['role-permission'].active}${id}`);
  }

  public static readonly deactive = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['bpmn-api']['role-permission'].deactive}${id}`);
  }
}