import { WorkFlowStepCM, WorkFlowStepUM, WorkFlowStepVM } from '@view-models';
import { environment } from 'src/environments/environment';
import { useHttp } from '@extras/services';
import { AxiosResponse } from 'axios';

export class WorkFlowStepService {

  public static readonly findAll = (): Promise<AxiosResponse<WorkFlowStepVM[]>> => {
    return useHttp().get<WorkFlowStepVM[]>(`${environment.apiEndpont}${environment.api['bpmn-api']['comment'].main}`);
  }

  public static readonly findById = (id: string): Promise<AxiosResponse<WorkFlowStepVM>> => {
    return useHttp().get<WorkFlowStepVM>(`${environment.apiEndpont}${environment.api['bpmn-api']['comment'].getById}${id}`);
  }

  public static readonly insert = (data: WorkFlowStepCM): Promise<AxiosResponse<WorkFlowStepVM>> => {
    return useHttp().post<WorkFlowStepVM>(`${environment.apiEndpont}${environment.api['bpmn-api']['comment'].main}`, data);
  }

  public static readonly update = (data: WorkFlowStepUM): Promise<AxiosResponse<WorkFlowStepVM>> => {
    return useHttp().put<WorkFlowStepVM>(`${environment.apiEndpont}${environment.api['bpmn-api']['comment'].main}`, data);
  }

  public static readonly remove = (id: string): Promise<AxiosResponse<WorkFlowStepVM>> => {
    return useHttp().delete<WorkFlowStepVM>(`${environment.apiEndpont}${environment.api['bpmn-api']['comment'].getById}${id}`);
  }

  public static readonly active = (id: string): Promise<AxiosResponse<WorkFlowStepVM>> => {
    return useHttp().put<WorkFlowStepVM>(`${environment.apiEndpont}${environment.api['bpmn-api']['comment'].active}${id}`);
  }

  public static readonly deactive = (id: string): Promise<AxiosResponse<WorkFlowStepVM>> => {
    return useHttp().put<WorkFlowStepVM>(`${environment.apiEndpont}${environment.api['bpmn-api']['comment'].deactive}${id}`);
  }
}