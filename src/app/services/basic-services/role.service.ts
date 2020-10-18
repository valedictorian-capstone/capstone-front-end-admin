import { useHttp } from '@extras/services';
import { AxiosResponse } from 'axios';
import { RoleCM, RoleUM, RoleVM } from '@view-models';
import { environment } from 'src/environments/environment';

export class RoleService {

  public static readonly findAll = (): Promise<AxiosResponse<RoleVM[]>> => {
    return useHttp().get<RoleVM[]>(`${environment.apiEndpont}${environment.api['basic-api']['role'].main}`);
  }

  public static readonly findById = (id: string): Promise<AxiosResponse<RoleVM>> => {
    return useHttp().get<RoleVM>(`${environment.apiEndpont}${environment.api['basic-api']['role'].getById}${id}`);
  }

  public static readonly insert = (data: RoleCM): Promise<AxiosResponse<RoleVM>> => {
    return useHttp().post<RoleVM>(`${environment.apiEndpont}${environment.api['basic-api']['role'].main}`, data);
  }

  public static readonly update = (data: RoleUM): Promise<AxiosResponse<RoleVM>> => {
    return useHttp().put<RoleVM>(`${environment.apiEndpont}${environment.api['basic-api']['role'].main}`, data);
  }

  public static readonly remove = (id: string): Promise<AxiosResponse<RoleVM>> => {
    return useHttp().delete<RoleVM>(`${environment.apiEndpont}${environment.api['basic-api']['role'].getById}${id}`);
  }

  public static readonly active = (ids: string[]): Promise<AxiosResponse<RoleVM>> => {
    return useHttp().put<RoleVM>(`${environment.apiEndpont}${environment.api['basic-api']['role'].active}`, ids);
  }

  public static readonly deactive = (ids: string[]): Promise<AxiosResponse<RoleVM>> => {
    return useHttp().put<RoleVM>(`${environment.apiEndpont}${environment.api['basic-api']['role'].deactive}`, ids);
  }
}