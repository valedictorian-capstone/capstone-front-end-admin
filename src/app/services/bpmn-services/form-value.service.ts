import { Observable } from "rxjs";
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { FormValueCM, FormValueUM, FormValueVM } from "src/app/view-models";
import { environment } from "src/environments/environment";

export class FormValueService {
  
  public static readonly findAll = (): Observable<FormValueVM[]> => {
    return ajax.getJSON<FormValueVM[]>(`${environment.apiEndpont}${environment.api['bpmn-api']['form-value'].main}`);
  }

  public static readonly findById = (id: string): Observable<FormValueVM> => {
    return ajax.getJSON<FormValueVM>(`${environment.apiEndpont}${environment.api['bpmn-api']['form-value'].getById}${id}`);
  }

  public static readonly insert = (data: FormValueCM): Observable<AjaxResponse> => {
    return ajax.post(`${environment.apiEndpont}${environment.api['bpmn-api']['form-value'].main}`, data);
  }

  public static readonly update = (data: FormValueUM): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['bpmn-api']['form-value'].main}`, data);
  }

  public static readonly remove = (id: string): Observable<AjaxResponse> => {
    return ajax.delete(`${environment.apiEndpont}${environment.api['bpmn-api']['form-value'].getById}${id}`);
  }

  public static readonly active = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['bpmn-api']['form-value'].active}${id}`);
  }

  public static readonly deactive = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['bpmn-api']['form-value'].deactive}${id}`);
  }
}