import { useHttp } from '@extras/services';
import { AxiosResponse } from 'axios';
import { FormValueCM, FormValueUM, FormValueVM } from '@view-models';
import { environment } from 'src/environments/environment';

export class FormValueService {

  public static readonly findAll = (): Promise<AxiosResponse<FormValueVM[]>> => {
    return useHttp().get<FormValueVM[]>(`${environment.apiEndpont}${environment.api['form-api']['form-value'].main}`);
  }

  public static readonly findById = (id: string): Promise<AxiosResponse<FormValueVM>> => {
    return useHttp().get<FormValueVM>(`${environment.apiEndpont}${environment.api['form-api']['form-value'].getById}${id}`);
  }

  public static readonly insert = (data: FormValueCM): Promise<AxiosResponse<FormValueVM>> => {
    return useHttp().post<FormValueVM>(`${environment.apiEndpont}${environment.api['form-api']['form-value'].main}`, data);
  }

  public static readonly update = (data: FormValueUM): Promise<AxiosResponse<FormValueVM>> => {
    return useHttp().put<FormValueVM>(`${environment.apiEndpont}${environment.api['form-api']['form-value'].main}`, data);
  }

  public static readonly remove = (id: string): Promise<AxiosResponse<FormValueVM>> => {
    return useHttp().delete<FormValueVM>(`${environment.apiEndpont}${environment.api['form-api']['form-value'].getById}${id}`);
  }

  public static readonly active = (id: string): Promise<AxiosResponse<FormValueVM>> => {
    return useHttp().put<FormValueVM>(`${environment.apiEndpont}${environment.api['form-api']['form-value'].active}${id}`);
  }

  public static readonly deactive = (id: string): Promise<AxiosResponse<FormValueVM>> => {
    return useHttp().put<FormValueVM>(`${environment.apiEndpont}${environment.api['form-api']['form-value'].deactive}${id}`);
  }
}