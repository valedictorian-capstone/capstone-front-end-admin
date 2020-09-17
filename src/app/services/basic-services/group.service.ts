import { Observable } from "rxjs";
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { GroupCM, GroupUM, GroupVM } from "src/app/view-models";
import { environment } from "src/environments/environment";

export class GroupService {
  
  public static readonly findAll = (): Observable<GroupVM[]> => {
    return ajax.getJSON<GroupVM[]>(`${environment.apiEndpont}${environment.api['basic-api']['group'].main}`);
  }

  public static readonly findById = (id: string): Observable<GroupVM> => {
    return ajax.getJSON<GroupVM>(`${environment.apiEndpont}${environment.api['basic-api']['group'].getById}${id}`);
  }

  public static readonly insert = (data: GroupCM): Observable<AjaxResponse> => {
    return ajax.post(`${environment.apiEndpont}${environment.api['basic-api']['group'].main}`, data);
  }

  public static readonly update = (data: GroupUM): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['basic-api']['group'].main}`, data);
  }

  public static readonly remove = (id: string): Observable<AjaxResponse> => {
    return ajax.delete(`${environment.apiEndpont}${environment.api['basic-api']['group'].getById}${id}`);
  }

  public static readonly active = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['basic-api']['group'].active}${id}`);
  }

  public static readonly deactive = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['basic-api']['group'].deactive}${id}`);
  }
}