import { Observable } from "rxjs";
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { WorkFlowConditionCM, WorkFlowConditionUM, WorkFlowConditionVM } from "src/app/view-models";
import { environment } from "src/environments/environment";

export class WorkFlowConditionService {
  
  public static readonly findAll = (): Observable<WorkFlowConditionVM[]> => {
    return ajax.getJSON<WorkFlowConditionVM[]>(`${environment.apiEndpont}${environment.api['bpmn-api']['work-flow-condition'].main}`);
  }

  public static readonly findById = (id: string): Observable<WorkFlowConditionVM> => {
    return ajax.getJSON<WorkFlowConditionVM>(`${environment.apiEndpont}${environment.api['bpmn-api']['work-flow-condition'].getById}${id}`);
  }

  public static readonly insert = (data: WorkFlowConditionCM): Observable<AjaxResponse> => {
    return ajax.post(`${environment.apiEndpont}${environment.api['bpmn-api']['work-flow-condition'].main}`, data);
  }

  public static readonly update = (data: WorkFlowConditionUM): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['bpmn-api']['work-flow-condition'].main}`, data);
  }

  public static readonly remove = (id: string): Observable<AjaxResponse> => {
    return ajax.delete(`${environment.apiEndpont}${environment.api['bpmn-api']['work-flow-condition'].getById}${id}`);
  }

  public static readonly active = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['bpmn-api']['work-flow-condition'].active}${id}`);
  }

  public static readonly deactive = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['bpmn-api']['work-flow-condition'].deactive}${id}`);
  }
}