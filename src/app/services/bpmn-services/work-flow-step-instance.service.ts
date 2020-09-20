import { WorkFlowStepInstanceCM, WorkFlowStepInstanceUM, WorkFlowStepInstanceVM } from '@view-models';
import { environment } from 'src/environments/environment';
import { useHttp } from '@extras/services';
import { AxiosResponse } from 'axios';

export class WorkFlowStepInstanceService {

  public static readonly findAll = (): Promise<AxiosResponse<WorkFlowStepInstanceVM[]>> => {
    return useHttp().get<WorkFlowStepInstanceVM[]>(`${environment.apiEndpont}${environment.api['bpmn-api']['comment'].main}`);
  }

  public static readonly findById = (id: string): Promise<AxiosResponse<WorkFlowStepInstanceVM>> => {
    return useHttp().get<WorkFlowStepInstanceVM>(`${environment.apiEndpont}${environment.api['bpmn-api']['comment'].getById}${id}`);
  }

  public static readonly insert = (data: WorkFlowStepInstanceCM): Promise<AxiosResponse<WorkFlowStepInstanceVM>> => {
    return useHttp().post<WorkFlowStepInstanceVM>(`${environment.apiEndpont}${environment.api['bpmn-api']['comment'].main}`, data);
  }

  public static readonly update = (data: WorkFlowStepInstanceUM): Promise<AxiosResponse<WorkFlowStepInstanceVM>> => {
    return useHttp().put<WorkFlowStepInstanceVM>(`${environment.apiEndpont}${environment.api['bpmn-api']['comment'].main}`, data);
  }

  public static readonly remove = (id: string): Promise<AxiosResponse<WorkFlowStepInstanceVM>> => {
    return useHttp().delete<WorkFlowStepInstanceVM>(`${environment.apiEndpont}${environment.api['bpmn-api']['comment'].getById}${id}`);
  }

  public static readonly active = (id: string): Promise<AxiosResponse<WorkFlowStepInstanceVM>> => {
    return useHttp().put<WorkFlowStepInstanceVM>(`${environment.apiEndpont}${environment.api['bpmn-api']['comment'].active}${id}`);
  }

  public static readonly deactive = (id: string): Promise<AxiosResponse<WorkFlowStepInstanceVM>> => {
    return useHttp().put<WorkFlowStepInstanceVM>(`${environment.apiEndpont}${environment.api['bpmn-api']['comment'].deactive}${id}`);
  }
}