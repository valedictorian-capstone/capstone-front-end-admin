import { Observable } from "rxjs";
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { CustomerWorkFlowStepInstanceCM, CustomerWorkFlowStepInstanceUM, CustomerWorkFlowStepInstanceVM } from "src/app/view-models";
import { environment } from "src/environments/environment";

export class CustomerWorkFlowStepInstanceService {
  
  public static readonly findAll = (): Observable<CustomerWorkFlowStepInstanceVM[]> => {
    return ajax.getJSON<CustomerWorkFlowStepInstanceVM[]>(`${environment.apiEndpont}${environment.api['bpmn-api']['customer-work-flow-step-instance'].main}`);
  }

  public static readonly findById = (id: string): Observable<CustomerWorkFlowStepInstanceVM> => {
    return ajax.getJSON<CustomerWorkFlowStepInstanceVM>(`${environment.apiEndpont}${environment.api['bpmn-api']['customer-work-flow-step-instance'].getById}${id}`);
  }

  public static readonly insert = (data: CustomerWorkFlowStepInstanceCM): Observable<AjaxResponse> => {
    return ajax.post(`${environment.apiEndpont}${environment.api['bpmn-api']['customer-work-flow-step-instance'].main}`, data);
  }

  public static readonly update = (data: CustomerWorkFlowStepInstanceUM): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['bpmn-api']['customer-work-flow-step-instance'].main}`, data);
  }

  public static readonly remove = (id: string): Observable<AjaxResponse> => {
    return ajax.delete(`${environment.apiEndpont}${environment.api['bpmn-api']['customer-work-flow-step-instance'].getById}${id}`);
  }

  public static readonly active = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['bpmn-api']['customer-work-flow-step-instance'].active}${id}`);
  }

  public static readonly deactive = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['bpmn-api']['customer-work-flow-step-instance'].deactive}${id}`);
  }
}