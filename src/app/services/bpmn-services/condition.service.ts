
import { ConditionCM, ConditionUM, ConditionVM } from '@view-models';
import { environment } from 'src/environments/environment';
import { AxiosResponse } from 'axios';
import { useHttp } from '@extras/services';

export class ConditionService {

  public static readonly findAll = (): Promise<AxiosResponse<ConditionVM[]>> => {
    return useHttp().get<ConditionVM[]>(`${environment.apiEndpont}${environment.api['bpmn-api']['condition'].main}`);
  }

  public static readonly findById = (id: string): Promise<AxiosResponse<ConditionVM>> => {
    return useHttp().get<ConditionVM>(`${environment.apiEndpont}${environment.api['bpmn-api']['condition'].getById}${id}`);
  }

  public static readonly insert = (data: ConditionCM): Promise<AxiosResponse<ConditionVM>> => {
    return useHttp().post<ConditionVM>(`${environment.apiEndpont}${environment.api['bpmn-api']['condition'].main}`, data);
  }

  public static readonly update = (data: ConditionUM): Promise<AxiosResponse<ConditionVM>> => {
    return useHttp().put<ConditionVM>(`${environment.apiEndpont}${environment.api['bpmn-api']['condition'].main}`, data);
  }

  public static readonly remove = (id: string): Promise<AxiosResponse<ConditionVM>> => {
    return useHttp().delete<ConditionVM>(`${environment.apiEndpont}${environment.api['bpmn-api']['condition'].getById}${id}`);
  }

  public static readonly active = (id: string): Promise<AxiosResponse<ConditionVM>> => {
    return useHttp().put<ConditionVM>(`${environment.apiEndpont}${environment.api['bpmn-api']['condition'].active}${id}`);
  }

  public static readonly deactive = (id: string): Promise<AxiosResponse<ConditionVM>> => {
    return useHttp().put<ConditionVM>(`${environment.apiEndpont}${environment.api['bpmn-api']['condition'].deactive}${id}`);
  }
}