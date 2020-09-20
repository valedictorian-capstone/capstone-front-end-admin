import { useHttp } from '@extras/services';
import { AxiosResponse } from 'axios';
import { PermissionCM, PermissionUM, PermissionVM } from '@view-models';
import { environment } from 'src/environments/environment';

export class PermissionService {

  public static readonly findAll = (): Promise<AxiosResponse<PermissionVM[]>> => {
    return useHttp().get<PermissionVM[]>(`${environment.apiEndpont}${environment.api['basic-api']['permission'].main}`);
  }

  public static readonly findById = (id: string): Promise<AxiosResponse<PermissionVM>> => {
    return useHttp().get<PermissionVM>(`${environment.apiEndpont}${environment.api['basic-api']['permission'].getById}${id}`);
  }

  public static readonly insert = (data: PermissionCM): Promise<AxiosResponse<PermissionVM>> => {
    return useHttp().post<PermissionVM>(`${environment.apiEndpont}${environment.api['basic-api']['permission'].main}`, data);
  }

  public static readonly update = (data: PermissionUM): Promise<AxiosResponse<PermissionVM>> => {
    return useHttp().put<PermissionVM>(`${environment.apiEndpont}${environment.api['basic-api']['permission'].main}`, data);
  }

  public static readonly remove = (id: string): Promise<AxiosResponse<PermissionVM>> => {
    return useHttp().delete<PermissionVM>(`${environment.apiEndpont}${environment.api['basic-api']['permission'].getById}${id}`);
  }

  public static readonly active = (id: string): Promise<AxiosResponse<PermissionVM>> => {
    return useHttp().put<PermissionVM>(`${environment.apiEndpont}${environment.api['basic-api']['permission'].active}${id}`);
  }

  public static readonly deactive = (id: string): Promise<AxiosResponse<PermissionVM>> => {
    return useHttp().put<PermissionVM>(`${environment.apiEndpont}${environment.api['basic-api']['permission'].deactive}${id}`);
  }
}