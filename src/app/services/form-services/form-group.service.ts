import { useHttp } from '@extras/services';
import { AxiosResponse } from 'axios';
import { FormGroupCM, FormGroupUM, FormGroupVM } from '@view-models';
import { environment } from 'src/environments/environment';

export class FormGroupService {

  public static readonly findAll = (): Promise<AxiosResponse<FormGroupVM[]>> => {
    return useHttp().get<FormGroupVM[]>(`${environment.apiEndpont}${environment.api['form-api']['form-group'].main}`);
  }

  public static readonly findById = (id: string): Promise<AxiosResponse<FormGroupVM>> => {
    return useHttp().get<FormGroupVM>(`${environment.apiEndpont}${environment.api['form-api']['form-group'].getById}${id}`);
  }

  public static readonly insert = (data: FormGroupCM): Promise<AxiosResponse<FormGroupVM>> => {
    return useHttp().post<FormGroupVM>(`${environment.apiEndpont}${environment.api['form-api']['form-group'].main}`, data);
  }

  public static readonly update = (data: FormGroupUM): Promise<AxiosResponse<FormGroupVM>> => {
    return useHttp().put<FormGroupVM>(`${environment.apiEndpont}${environment.api['form-api']['form-group'].main}`, data);
  }

  public static readonly remove = (id: string): Promise<AxiosResponse<FormGroupVM>> => {
    return useHttp().delete<FormGroupVM>(`${environment.apiEndpont}${environment.api['form-api']['form-group'].getById}${id}`);
  }

  public static readonly active = (ids: string[]): Promise<AxiosResponse<FormGroupVM>> => {
    return useHttp().put<FormGroupVM>(`${environment.apiEndpont}${environment.api['form-api']['form-group'].active}`, ids);
  }

  public static readonly deactive = (ids: string[]): Promise<AxiosResponse<FormGroupVM>> => {
    return useHttp().put<FormGroupVM>(`${environment.apiEndpont}${environment.api['form-api']['form-group'].deactive}`, ids);
  }
}