import { Observable } from "rxjs";
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { FormControlPatternCM, FormControlPatternUM, FormControlPatternVM } from "src/app/view-models";
import { environment } from "src/environments/environment";

export class FormControlPatternService {
  
  public static readonly findAll = (): Observable<FormControlPatternVM[]> => {
    return ajax.getJSON<FormControlPatternVM[]>(`${environment.apiEndpont}${environment.api['bpmn-api']['form-control-pattern'].main}`);
  }

  public static readonly findById = (id: string): Observable<FormControlPatternVM> => {
    return ajax.getJSON<FormControlPatternVM>(`${environment.apiEndpont}${environment.api['bpmn-api']['form-control-pattern'].getById}${id}`);
  }

  public static readonly insert = (ControlPattern: FormControlPatternCM): Observable<AjaxResponse> => {
    return ajax.post(`${environment.apiEndpont}${environment.api['bpmn-api']['form-control-pattern'].main}`, ControlPattern);
  }

  public static readonly update = (ControlPattern: FormControlPatternUM): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['bpmn-api']['form-control-pattern'].main}`, ControlPattern);
  }

  public static readonly remove = (id: string): Observable<AjaxResponse> => {
    return ajax.delete(`${environment.apiEndpont}${environment.api['bpmn-api']['form-control-pattern'].getById}${id}`);
  }

  public static readonly active = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['bpmn-api']['form-control-pattern'].active}${id}`);
  }

  public static readonly deactive = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['bpmn-api']['form-control-pattern'].deactive}${id}`);
  }
}