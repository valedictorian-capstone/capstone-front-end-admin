import { Observable } from "rxjs";
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { PatternCM, PatternUM, PatternVM } from "src/app/view-models";
import { environment } from "src/environments/environment";

export class PatternService {
  
  public static readonly findAll = (): Observable<PatternVM[]> => {
    return ajax.getJSON<PatternVM[]>(`${environment.apiEndpont}${environment.api['bpmn-api']['pattern'].main}`);
  }

  public static readonly findById = (id: string): Observable<PatternVM> => {
    return ajax.getJSON<PatternVM>(`${environment.apiEndpont}${environment.api['bpmn-api']['pattern'].getById}${id}`);
  }

  public static readonly insert = (data: PatternCM): Observable<AjaxResponse> => {
    return ajax.post(`${environment.apiEndpont}${environment.api['bpmn-api']['pattern'].main}`, data);
  }

  public static readonly update = (data: PatternUM): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['bpmn-api']['pattern'].main}`, data);
  }

  public static readonly remove = (id: string): Observable<AjaxResponse> => {
    return ajax.delete(`${environment.apiEndpont}${environment.api['bpmn-api']['pattern'].getById}${id}`);
  }

  public static readonly active = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['bpmn-api']['pattern'].active}${id}`);
  }

  public static readonly deactive = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['bpmn-api']['pattern'].deactive}${id}`);
  }
}