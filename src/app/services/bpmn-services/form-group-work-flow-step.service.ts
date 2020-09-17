import { Observable } from "rxjs";
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { FormGroupWorkFlowStepCM, FormGroupWorkFlowStepUM, FormGroupWorkFlowStepVM } from "src/app/view-models";
import { environment } from "src/environments/environment";

export class FormGroupWorkFlowStepService {
  
  public static readonly findAll = (): Observable<FormGroupWorkFlowStepVM[]> => {
    return ajax.getJSON<FormGroupWorkFlowStepVM[]>(`${environment.apiEndpont}${environment.api['bpmn-api']['form-group-work-flow-step'].main}`);
  }

  public static readonly findById = (id: string): Observable<FormGroupWorkFlowStepVM> => {
    return ajax.getJSON<FormGroupWorkFlowStepVM>(`${environment.apiEndpont}${environment.api['bpmn-api']['form-group-work-flow-step'].getById}${id}`);
  }

  public static readonly insert = (data: FormGroupWorkFlowStepCM): Observable<AjaxResponse> => {
    return ajax.post(`${environment.apiEndpont}${environment.api['bpmn-api']['form-group-work-flow-step'].main}`, data);
  }

  public static readonly update = (data: FormGroupWorkFlowStepUM): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['bpmn-api']['form-group-work-flow-step'].main}`, data);
  }

  public static readonly remove = (id: string): Observable<AjaxResponse> => {
    return ajax.delete(`${environment.apiEndpont}${environment.api['bpmn-api']['form-group-work-flow-step'].getById}${id}`);
  }

  public static readonly active = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['bpmn-api']['form-group-work-flow-step'].active}${id}`);
  }

  public static readonly deactive = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['bpmn-api']['form-group-work-flow-step'].deactive}${id}`);
  }
}