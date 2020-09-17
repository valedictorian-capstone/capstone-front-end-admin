import { Observable } from "rxjs";
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { ConditionCM, ConditionUM, ConditionVM } from "src/app/view-models";
import { environment } from "src/environments/environment";

export class ConditionService {
  
  public static readonly findAll = (): Observable<ConditionVM[]> => {
    return ajax.getJSON<ConditionVM[]>(`${environment.apiEndpont}${environment.api['bpmn-api']['condition'].main}`);
  }

  public static readonly findById = (id: string): Observable<ConditionVM> => {
    return ajax.getJSON<ConditionVM>(`${environment.apiEndpont}${environment.api['bpmn-api']['condition'].getById}${id}`);
  }

  public static readonly insert = (data: ConditionCM): Observable<AjaxResponse> => {
    return ajax.post(`${environment.apiEndpont}${environment.api['bpmn-api']['condition'].main}`, data);
  }

  public static readonly update = (data: ConditionUM): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['bpmn-api']['condition'].main}`, data);
  }

  public static readonly remove = (id: string): Observable<AjaxResponse> => {
    return ajax.delete(`${environment.apiEndpont}${environment.api['bpmn-api']['condition'].getById}${id}`);
  }

  public static readonly active = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['bpmn-api']['condition'].active}${id}`);
  }

  public static readonly deactive = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['bpmn-api']['condition'].deactive}${id}`);
  }
}