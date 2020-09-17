import { Observable } from "rxjs";
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { FormGroupCM, FormGroupUM, FormGroupVM } from "src/app/view-models";
import { environment } from "src/environments/environment";

export class FormGroupService {
  
  public static readonly findAll = (): Observable<FormGroupVM[]> => {
    return ajax.getJSON<FormGroupVM[]>(`${environment.apiEndpont}${environment.api['bpmn-api']['form-group'].main}`);
  }

  public static readonly findById = (id: string): Observable<FormGroupVM> => {
    return ajax.getJSON<FormGroupVM>(`${environment.apiEndpont}${environment.api['bpmn-api']['form-group'].getById}${id}`);
  }

  public static readonly insert = (data: FormGroupCM): Observable<AjaxResponse> => {
    return ajax.post(`${environment.apiEndpont}${environment.api['bpmn-api']['form-group'].main}`, data);
  }

  public static readonly update = (data: FormGroupUM): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['bpmn-api']['form-group'].main}`, data);
  }

  public static readonly remove = (id: string): Observable<AjaxResponse> => {
    return ajax.delete(`${environment.apiEndpont}${environment.api['bpmn-api']['form-group'].getById}${id}`);
  }

  public static readonly active = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['bpmn-api']['form-group'].active}${id}`);
  }

  public static readonly deactive = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['bpmn-api']['form-group'].deactive}${id}`);
  }
}