import { Observable } from "rxjs";
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { DepartmentCM, DepartmentUM, DepartmentVM } from "src/app/view-models";
import { environment } from "src/environments/environment";

export class DepartmentService {
  
  public static readonly findAll = (): Observable<DepartmentVM[]> => {
    return ajax.getJSON<DepartmentVM[]>(`${environment.apiEndpont}${environment.api['basic-api']['department'].main}`);
  }

  public static readonly findById = (id: string): Observable<DepartmentVM> => {
    return ajax.getJSON<DepartmentVM>(`${environment.apiEndpont}${environment.api['basic-api']['department'].getById}${id}`);
  }

  public static readonly insert = (data: DepartmentCM): Observable<AjaxResponse> => {
    return ajax.post(`${environment.apiEndpont}${environment.api['basic-api']['department'].main}`, data);
  }

  public static readonly update = (data: DepartmentUM): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['basic-api']['department'].main}`, data);
  }

  public static readonly remove = (id: string): Observable<AjaxResponse> => {
    return ajax.delete(`${environment.apiEndpont}${environment.api['basic-api']['department'].getById}${id}`);
  }

  public static readonly active = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['basic-api']['department'].active}${id}`);
  }

  public static readonly deactive = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['basic-api']['department'].deactive}${id}`);
  }
}