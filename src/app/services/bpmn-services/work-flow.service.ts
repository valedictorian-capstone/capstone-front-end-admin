import { Observable } from "rxjs";
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { WorkFlowCM, WorkFlowUM, WorkFlowVM } from "src/app/view-models";
import { environment } from "src/environments/environment";

export class WorkFlowService {
  
  public static readonly findAll = (): Observable<WorkFlowVM[]> => {
    return ajax.getJSON<WorkFlowVM[]>(`${environment.apiEndpont}${environment.api['bpmn-api']['work-flow'].main}`);
  }

  public static readonly findById = (id: string): Observable<WorkFlowVM> => {
    return ajax.getJSON<WorkFlowVM>(`${environment.apiEndpont}${environment.api['bpmn-api']['work-flow'].getById}${id}`);
  }

  public static readonly insert = (data: WorkFlowCM): Observable<AjaxResponse> => {
    return ajax.post(`${environment.apiEndpont}${environment.api['bpmn-api']['work-flow'].main}`, data);
  }

  public static readonly update = (data: WorkFlowUM): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['bpmn-api']['work-flow'].main}`, data);
  }

  public static readonly remove = (id: string): Observable<AjaxResponse> => {
    return ajax.delete(`${environment.apiEndpont}${environment.api['bpmn-api']['work-flow'].getById}${id}`);
  }

  public static readonly active = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['bpmn-api']['work-flow'].active}${id}`);
  }

  public static readonly deactive = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['bpmn-api']['work-flow'].deactive}${id}`);
  }
}