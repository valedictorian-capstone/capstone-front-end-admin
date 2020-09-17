import { Observable } from "rxjs";
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { PermissionCM, PermissionUM, PermissionVM } from "src/app/view-models";
import { environment } from "src/environments/environment";

export class PermissionService {
  
  public static readonly findAll = (): Observable<PermissionVM[]> => {
    return ajax.getJSON<PermissionVM[]>(`${environment.apiEndpont}${environment.api['bpmn-api']['permission'].main}`);
  }

  public static readonly findById = (id: string): Observable<PermissionVM> => {
    return ajax.getJSON<PermissionVM>(`${environment.apiEndpont}${environment.api['bpmn-api']['permission'].getById}${id}`);
  }

  public static readonly insert = (data: PermissionCM): Observable<AjaxResponse> => {
    return ajax.post(`${environment.apiEndpont}${environment.api['bpmn-api']['permission'].main}`, data);
  }

  public static readonly update = (data: PermissionUM): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['bpmn-api']['permission'].main}`, data);
  }

  public static readonly remove = (id: string): Observable<AjaxResponse> => {
    return ajax.delete(`${environment.apiEndpont}${environment.api['bpmn-api']['permission'].getById}${id}`);
  }

  public static readonly active = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['bpmn-api']['permission'].active}${id}`);
  }

  public static readonly deactive = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['bpmn-api']['permission'].deactive}${id}`);
  }
}