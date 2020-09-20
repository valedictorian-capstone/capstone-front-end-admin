import { WorkFlowConnectionCM, WorkFlowConnectionUM, WorkFlowConnectionVM } from '@view-models';
import { environment } from 'src/environments/environment';
import { useHttp } from '@extras/services';
import { AxiosResponse } from 'axios';

export class WorkFlowConnectionService {

  public static readonly findAll = (): Promise<AxiosResponse<WorkFlowConnectionVM[]>> => {
    return useHttp().get<WorkFlowConnectionVM[]>(`${environment.apiEndpont}${environment.api['bpmn-api']['comment'].main}`);
  }

  public static readonly findById = (id: string): Promise<AxiosResponse<WorkFlowConnectionVM>> => {
    return useHttp().get<WorkFlowConnectionVM>(`${environment.apiEndpont}${environment.api['bpmn-api']['comment'].getById}${id}`);
  }

  public static readonly insert = (data: WorkFlowConnectionCM): Promise<AxiosResponse<WorkFlowConnectionVM>> => {
    return useHttp().post<WorkFlowConnectionVM>(`${environment.apiEndpont}${environment.api['bpmn-api']['comment'].main}`, data);
  }

  public static readonly update = (data: WorkFlowConnectionUM): Promise<AxiosResponse<WorkFlowConnectionVM>> => {
    return useHttp().put<WorkFlowConnectionVM>(`${environment.apiEndpont}${environment.api['bpmn-api']['comment'].main}`, data);
  }

  public static readonly remove = (id: string): Promise<AxiosResponse<WorkFlowConnectionVM>> => {
    return useHttp().delete<WorkFlowConnectionVM>(`${environment.apiEndpont}${environment.api['bpmn-api']['comment'].getById}${id}`);
  }

  public static readonly active = (id: string): Promise<AxiosResponse<WorkFlowConnectionVM>> => {
    return useHttp().put<WorkFlowConnectionVM>(`${environment.apiEndpont}${environment.api['bpmn-api']['comment'].active}${id}`);
  }

  public static readonly deactive = (id: string): Promise<AxiosResponse<WorkFlowConnectionVM>> => {
    return useHttp().put<WorkFlowConnectionVM>(`${environment.apiEndpont}${environment.api['bpmn-api']['comment'].deactive}${id}`);
  }
}