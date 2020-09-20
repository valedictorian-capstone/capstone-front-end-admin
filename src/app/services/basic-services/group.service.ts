import { useHttp } from '@extras/services';
import { AxiosResponse } from 'axios';
import { GroupCM, GroupUM, GroupVM } from '@view-models';
import { environment } from 'src/environments/environment';

export class GroupService {

  public static readonly findAll = (): Promise<AxiosResponse<GroupVM[]>> => {
    return useHttp().get<GroupVM[]>(`${environment.apiEndpont}${environment.api['basic-api']['group'].main}`);
  }

  public static readonly findById = (id: string): Promise<AxiosResponse<GroupVM>> => {
    return useHttp().get<GroupVM>(`${environment.apiEndpont}${environment.api['basic-api']['group'].getById}${id}`);
  }

  public static readonly insert = (data: GroupCM): Promise<AxiosResponse<GroupVM>> => {
    return useHttp().post<GroupVM>(`${environment.apiEndpont}${environment.api['basic-api']['group'].main}`, data);
  }

  public static readonly update = (data: GroupUM): Promise<AxiosResponse<GroupVM>> => {
    return useHttp().put<GroupVM>(`${environment.apiEndpont}${environment.api['basic-api']['group'].main}`, data);
  }

  public static readonly remove = (id: string): Promise<AxiosResponse<GroupVM>> => {
    return useHttp().delete<GroupVM>(`${environment.apiEndpont}${environment.api['basic-api']['group'].getById}${id}`);
  }

  public static readonly active = (id: string): Promise<AxiosResponse<GroupVM>> => {
    return useHttp().put<GroupVM>(`${environment.apiEndpont}${environment.api['basic-api']['group'].active}${id}`);
  }

  public static readonly deactive = (id: string): Promise<AxiosResponse<GroupVM>> => {
    return useHttp().put<GroupVM>(`${environment.apiEndpont}${environment.api['basic-api']['group'].deactive}${id}`);
  }
}