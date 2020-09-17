import { Observable } from "rxjs";
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { FormControlCM, FormControlUM, FormControlVM } from "src/app/view-models";
import { environment } from "src/environments/environment";

export class FormControlService {
  
  public static readonly findAll = (): Observable<FormControlVM[]> => {
    return ajax.getJSON<FormControlVM[]>(`${environment.apiEndpont}${environment.api['bpmn-api']['form-control'].main}`);
  }

  public static readonly findById = (id: string): Observable<FormControlVM> => {
    return ajax.getJSON<FormControlVM>(`${environment.apiEndpont}${environment.api['bpmn-api']['form-control'].getById}${id}`);
  }

  public static readonly insert = (Control: FormControlCM): Observable<AjaxResponse> => {
    return ajax.post(`${environment.apiEndpont}${environment.api['bpmn-api']['form-control'].main}`, Control);
  }

  public static readonly update = (Control: FormControlUM): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['bpmn-api']['form-control'].main}`, Control);
  }

  public static readonly remove = (id: string): Observable<AjaxResponse> => {
    return ajax.delete(`${environment.apiEndpont}${environment.api['bpmn-api']['form-control'].getById}${id}`);
  }

  public static readonly active = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['bpmn-api']['form-control'].active}${id}`);
  }

  public static readonly deactive = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['bpmn-api']['form-control'].deactive}${id}`);
  }
}