import { WorkFlowCM, WorkFlowUM, WorkFlowVM } from '@view-models';
import { environment } from 'src/environments/environment';
import { useHttp } from '@extras/services';
import { AxiosResponse } from 'axios';

export class WorkFlowService {

  public static readonly findAll = (): Promise<AxiosResponse<WorkFlowVM[]>> => {
    return useHttp().get<WorkFlowVM[]>(`${environment.apiEndpont}${environment.api['bpmn-api']['comment'].main}`);
  }

  public static readonly findById = (id: string): Promise<AxiosResponse<WorkFlowVM>> => {
    return useHttp().get<WorkFlowVM>(`${environment.apiEndpont}${environment.api['bpmn-api']['comment'].getById}${id}`);
  }

  public static readonly insert = (data: WorkFlowCM): Promise<AxiosResponse<WorkFlowVM>> => {
    return useHttp().post<WorkFlowVM>(`${environment.apiEndpont}${environment.api['bpmn-api']['comment'].main}`, data);
  }

  public static readonly update = (data: WorkFlowUM): Promise<AxiosResponse<WorkFlowVM>> => {
    return useHttp().put<WorkFlowVM>(`${environment.apiEndpont}${environment.api['bpmn-api']['comment'].main}`, data);
  }

  public static readonly remove = (id: string): Promise<AxiosResponse<WorkFlowVM>> => {
    return useHttp().delete<WorkFlowVM>(`${environment.apiEndpont}${environment.api['bpmn-api']['comment'].getById}${id}`);
  }

  public static readonly active = (id: string): Promise<AxiosResponse<WorkFlowVM>> => {
    return useHttp().put<WorkFlowVM>(`${environment.apiEndpont}${environment.api['bpmn-api']['comment'].active}${id}`);
  }

  public static readonly deactive = (id: string): Promise<AxiosResponse<WorkFlowVM>> => {
    return useHttp().put<WorkFlowVM>(`${environment.apiEndpont}${environment.api['bpmn-api']['comment'].deactive}${id}`);
  }
}