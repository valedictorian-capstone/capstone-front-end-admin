import { Observable } from "rxjs";
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { FormDataCM, FormDataUM, FormDataVM } from "src/app/view-models";
import { environment } from "src/environments/environment";

export class FormDataService {
  
  public static readonly findAll = (): Observable<FormDataVM[]> => {
    return ajax.getJSON<FormDataVM[]>(`${environment.apiEndpont}${environment.api['bpmn-api']['form-data'].main}`);
  }

  public static readonly findById = (id: string): Observable<FormDataVM> => {
    return ajax.getJSON<FormDataVM>(`${environment.apiEndpont}${environment.api['bpmn-api']['form-data'].getById}${id}`);
  }

  public static readonly insert = (data: FormDataCM): Observable<AjaxResponse> => {
    return ajax.post(`${environment.apiEndpont}${environment.api['bpmn-api']['form-data'].main}`, data);
  }

  public static readonly update = (data: FormDataUM): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['bpmn-api']['form-data'].main}`, data);
  }

  public static readonly remove = (id: string): Observable<AjaxResponse> => {
    return ajax.delete(`${environment.apiEndpont}${environment.api['bpmn-api']['form-data'].getById}${id}`);
  }

  public static readonly active = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['bpmn-api']['form-data'].active}${id}`);
  }

  public static readonly deactive = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['bpmn-api']['form-data'].deactive}${id}`);
  }
}