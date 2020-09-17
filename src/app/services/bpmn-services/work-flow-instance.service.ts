import { Observable } from "rxjs";
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { WorkFlowInstanceCM, WorkFlowInstanceUM, WorkFlowInstanceVM } from "src/app/view-models";
import { environment } from "src/environments/environment";

export class WorkFlowInstanceService {
  
  public static readonly findAll = (): Observable<WorkFlowInstanceVM[]> => {
    return ajax.getJSON<WorkFlowInstanceVM[]>(`${environment.apiEndpont}${environment.api['bpmn-api']['work-flow-instance'].main}`);
  }

  public static readonly findById = (id: string): Observable<WorkFlowInstanceVM> => {
    return ajax.getJSON<WorkFlowInstanceVM>(`${environment.apiEndpont}${environment.api['bpmn-api']['work-flow-instance'].getById}${id}`);
  }

  public static readonly insert = (data: WorkFlowInstanceCM): Observable<AjaxResponse> => {
    return ajax.post(`${environment.apiEndpont}${environment.api['bpmn-api']['work-flow-instance'].main}`, data);
  }

  public static readonly update = (data: WorkFlowInstanceUM): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['bpmn-api']['work-flow-instance'].main}`, data);
  }

  public static readonly remove = (id: string): Observable<AjaxResponse> => {
    return ajax.delete(`${environment.apiEndpont}${environment.api['bpmn-api']['work-flow-instance'].getById}${id}`);
  }

  public static readonly active = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['bpmn-api']['work-flow-instance'].active}${id}`);
  }

  public static readonly deactive = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['bpmn-api']['work-flow-instance'].deactive}${id}`);
  }
}