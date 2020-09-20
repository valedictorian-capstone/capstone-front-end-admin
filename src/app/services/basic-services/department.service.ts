import { useHttp } from '@extras/services';
import { AxiosResponse } from 'axios';
import { DepartmentCM, DepartmentUM, DepartmentVM } from '@view-models';
import { environment } from 'src/environments/environment';

export class DepartmentService {

  public static readonly findAll = (): Promise<AxiosResponse<DepartmentVM[]>> => {
    return useHttp().get<DepartmentVM[]>(`${environment.apiEndpont}${environment.api['basic-api']['department'].main}`);
  }

  public static readonly findById = (id: string): Promise<AxiosResponse<DepartmentVM>> => {
    return useHttp().get<DepartmentVM>(`${environment.apiEndpont}${environment.api['basic-api']['department'].getById}${id}`);
  }

  public static readonly insert = (data: DepartmentCM): Promise<AxiosResponse<DepartmentVM>> => {
    return useHttp().post<DepartmentVM>(`${environment.apiEndpont}${environment.api['basic-api']['department'].main}`, data);
  }

  public static readonly update = (data: DepartmentUM): Promise<AxiosResponse<DepartmentVM>> => {
    return useHttp().put<DepartmentVM>(`${environment.apiEndpont}${environment.api['basic-api']['department'].main}`, data);
  }

  public static readonly remove = (id: string): Promise<AxiosResponse<DepartmentVM>> => {
    return useHttp().delete<DepartmentVM>(`${environment.apiEndpont}${environment.api['basic-api']['department'].getById}${id}`);
  }

  public static readonly active = (id: string): Promise<AxiosResponse<DepartmentVM>> => {
    return useHttp().put<DepartmentVM>(`${environment.apiEndpont}${environment.api['basic-api']['department'].active}${id}`);
  }

  public static readonly deactive = (id: string): Promise<AxiosResponse<DepartmentVM>> => {
    return useHttp().put<DepartmentVM>(`${environment.apiEndpont}${environment.api['basic-api']['department'].deactive}${id}`);
  }
}