import { WorkFlowCM, WorkFlowUM, WorkFlowVM } from '@view-models';
import { environment } from 'src/environments/environment';
import { useHttp } from '@extras/services';
import { AxiosResponse } from 'axios';

export class WorkFlowService {

  public static readonly findAll = (): Promise<AxiosResponse<WorkFlowVM[]>> => {
    return useHttp().get<WorkFlowVM[]>(`${environment.apiEndpont}${environment.api['bpmn-api']['work-flow'].main}`);
  }

  public static readonly findById = (id: string): Promise<AxiosResponse<WorkFlowVM>> => {
    return useHttp().get<WorkFlowVM>(`${environment.apiEndpont}${environment.api['bpmn-api']['work-flow'].getById}${id}`);
  }

  public static readonly insert = (data: WorkFlowCM): Promise<AxiosResponse<WorkFlowVM>> => {
    return useHttp().post<WorkFlowVM>(`${environment.apiEndpont}${environment.api['bpmn-api']['work-flow'].main}`, data);
  }

  public static readonly update = (data: WorkFlowUM): Promise<AxiosResponse<WorkFlowVM>> => {
    return useHttp().put<WorkFlowVM>(`${environment.apiEndpont}${environment.api['bpmn-api']['work-flow'].main}`, data);
  }

  public static readonly remove = (id: string): Promise<AxiosResponse<WorkFlowVM>> => {
    return useHttp().delete<WorkFlowVM>(`${environment.apiEndpont}${environment.api['bpmn-api']['work-flow'].getById}${id}`);
  }

  public static readonly active = (ids: string[]): Promise<AxiosResponse<WorkFlowVM>> => {
    return useHttp().put<WorkFlowVM>(`${environment.apiEndpont}${environment.api['bpmn-api']['work-flow'].active}`, ids);
  }

  public static readonly deactive = (ids: string[]): Promise<AxiosResponse<WorkFlowVM>> => {
    return useHttp().put<WorkFlowVM>(`${environment.apiEndpont}${environment.api['bpmn-api']['work-flow'].deactive}`, ids);
  }
}