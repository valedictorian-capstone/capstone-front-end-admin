import { WorkFlowInstanceCM, WorkFlowInstanceUM, WorkFlowInstanceVM } from '@view-models';
import { environment } from 'src/environments/environment';
import { useHttp } from '@extras/services';
import { AxiosResponse } from 'axios';

export class WorkFlowInstanceService {

  public static readonly findAll = (): Promise<AxiosResponse<WorkFlowInstanceVM[]>> => {
    return useHttp().get<WorkFlowInstanceVM[]>(`${environment.apiEndpont}${environment.api['bpmn-api']['comment'].main}`);
  }

  public static readonly findById = (id: string): Promise<AxiosResponse<WorkFlowInstanceVM>> => {
    return useHttp().get<WorkFlowInstanceVM>(`${environment.apiEndpont}${environment.api['bpmn-api']['comment'].getById}${id}`);
  }

  public static readonly insert = (data: WorkFlowInstanceCM): Promise<AxiosResponse<WorkFlowInstanceVM>> => {
    return useHttp().post<WorkFlowInstanceVM>(`${environment.apiEndpont}${environment.api['bpmn-api']['comment'].main}`, data);
  }

  public static readonly update = (data: WorkFlowInstanceUM): Promise<AxiosResponse<WorkFlowInstanceVM>> => {
    return useHttp().put<WorkFlowInstanceVM>(`${environment.apiEndpont}${environment.api['bpmn-api']['comment'].main}`, data);
  }

  public static readonly remove = (id: string): Promise<AxiosResponse<WorkFlowInstanceVM>> => {
    return useHttp().delete<WorkFlowInstanceVM>(`${environment.apiEndpont}${environment.api['bpmn-api']['comment'].getById}${id}`);
  }

  public static readonly active = (id: string): Promise<AxiosResponse<WorkFlowInstanceVM>> => {
    return useHttp().put<WorkFlowInstanceVM>(`${environment.apiEndpont}${environment.api['bpmn-api']['comment'].active}${id}`);
  }

  public static readonly deactive = (id: string): Promise<AxiosResponse<WorkFlowInstanceVM>> => {
    return useHttp().put<WorkFlowInstanceVM>(`${environment.apiEndpont}${environment.api['bpmn-api']['comment'].deactive}${id}`);
  }
}