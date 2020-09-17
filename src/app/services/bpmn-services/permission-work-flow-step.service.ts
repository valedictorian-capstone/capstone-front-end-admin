import { Observable } from "rxjs";
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { PermissionWorkFlowStepCM, PermissionWorkFlowStepUM, PermissionWorkFlowStepVM } from "src/app/view-models";
import { environment } from "src/environments/environment";

export class PermissionWorkFlowStepService {
  
  public static readonly findAll = (): Observable<PermissionWorkFlowStepVM[]> => {
    return ajax.getJSON<PermissionWorkFlowStepVM[]>(`${environment.apiEndpont}${environment.api['bpmn-api']['permission-work-flow-step'].main}`);
  }

  public static readonly findById = (id: string): Observable<PermissionWorkFlowStepVM> => {
    return ajax.getJSON<PermissionWorkFlowStepVM>(`${environment.apiEndpont}${environment.api['bpmn-api']['permission-work-flow-step'].getById}${id}`);
  }

  public static readonly insert = (data: PermissionWorkFlowStepCM): Observable<AjaxResponse> => {
    return ajax.post(`${environment.apiEndpont}${environment.api['bpmn-api']['permission-work-flow-step'].main}`, data);
  }

  public static readonly update = (data: PermissionWorkFlowStepUM): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['bpmn-api']['permission-work-flow-step'].main}`, data);
  }

  public static readonly remove = (id: string): Observable<AjaxResponse> => {
    return ajax.delete(`${environment.apiEndpont}${environment.api['bpmn-api']['permission-work-flow-step'].getById}${id}`);
  }

  public static readonly active = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['bpmn-api']['permission-work-flow-step'].active}${id}`);
  }

  public static readonly deactive = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['bpmn-api']['permission-work-flow-step'].deactive}${id}`);
  }
}