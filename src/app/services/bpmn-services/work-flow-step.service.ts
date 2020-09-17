import { Observable } from "rxjs";
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { WorkFlowStepCM, WorkFlowStepUM, WorkFlowStepVM } from "src/app/view-models";
import { environment } from "src/environments/environment";

export class WorkFlowStepService {
  
  public static readonly findAll = (): Observable<WorkFlowStepVM[]> => {
    return ajax.getJSON<WorkFlowStepVM[]>(`${environment.apiEndpont}${environment.api['bpmn-api']['work-flow-step'].main}`);
  }

  public static readonly findById = (id: string): Observable<WorkFlowStepVM> => {
    return ajax.getJSON<WorkFlowStepVM>(`${environment.apiEndpont}${environment.api['bpmn-api']['work-flow-step'].getById}${id}`);
  }

  public static readonly insert = (data: WorkFlowStepCM): Observable<AjaxResponse> => {
    return ajax.post(`${environment.apiEndpont}${environment.api['bpmn-api']['work-flow-step'].main}`, data);
  }

  public static readonly update = (data: WorkFlowStepUM): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['bpmn-api']['work-flow-step'].main}`, data);
  }

  public static readonly remove = (id: string): Observable<AjaxResponse> => {
    return ajax.delete(`${environment.apiEndpont}${environment.api['bpmn-api']['work-flow-step'].getById}${id}`);
  }

  public static readonly active = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['bpmn-api']['work-flow-step'].active}${id}`);
  }

  public static readonly deactive = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['bpmn-api']['work-flow-step'].deactive}${id}`);
  }
}