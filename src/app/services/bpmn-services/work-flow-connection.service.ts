import { Observable } from "rxjs";
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { WorkFlowConnectionCM, WorkFlowConnectionUM, WorkFlowConnectionVM } from "src/app/view-models";
import { environment } from "src/environments/environment";

export class WorkFlowConnectionService {
  
  public static readonly findAll = (): Observable<WorkFlowConnectionVM[]> => {
    return ajax.getJSON<WorkFlowConnectionVM[]>(`${environment.apiEndpont}${environment.api['bpmn-api']['work-flow-connection'].main}`);
  }

  public static readonly findById = (id: string): Observable<WorkFlowConnectionVM> => {
    return ajax.getJSON<WorkFlowConnectionVM>(`${environment.apiEndpont}${environment.api['bpmn-api']['work-flow-connection'].getById}${id}`);
  }

  public static readonly insert = (data: WorkFlowConnectionCM): Observable<AjaxResponse> => {
    return ajax.post(`${environment.apiEndpont}${environment.api['bpmn-api']['work-flow-connection'].main}`, data);
  }

  public static readonly update = (data: WorkFlowConnectionUM): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['bpmn-api']['work-flow-connection'].main}`, data);
  }

  public static readonly remove = (id: string): Observable<AjaxResponse> => {
    return ajax.delete(`${environment.apiEndpont}${environment.api['bpmn-api']['work-flow-connection'].getById}${id}`);
  }

  public static readonly active = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['bpmn-api']['work-flow-connection'].active}${id}`);
  }

  public static readonly deactive = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['bpmn-api']['work-flow-connection'].deactive}${id}`);
  }
}