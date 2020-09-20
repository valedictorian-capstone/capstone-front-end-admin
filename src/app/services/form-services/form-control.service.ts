import { useHttp } from '@extras/services';
import { AxiosResponse } from 'axios';
import { FormControlCM, FormControlUM, FormControlVM } from '@view-models';
import { environment } from 'src/environments/environment';

export class FormControlService {

  public static readonly findAll = (): Promise<AxiosResponse<FormControlVM[]>> => {
    return useHttp().get<FormControlVM[]>(`${environment.apiEndpont}${environment.api['form-api']['form-control'].main}`);
  }

  public static readonly findById = (id: string): Promise<AxiosResponse<FormControlVM>> => {
    return useHttp().get<FormControlVM>(`${environment.apiEndpont}${environment.api['form-api']['form-control'].getById}${id}`);
  }

  public static readonly insert = (data: FormControlCM): Promise<AxiosResponse<FormControlVM>> => {
    return useHttp().post<FormControlVM>(`${environment.apiEndpont}${environment.api['form-api']['form-control'].main}`, data);
  }

  public static readonly update = (data: FormControlUM): Promise<AxiosResponse<FormControlVM>> => {
    return useHttp().put<FormControlVM>(`${environment.apiEndpont}${environment.api['form-api']['form-control'].main}`, data);
  }

  public static readonly remove = (id: string): Promise<AxiosResponse<FormControlVM>> => {
    return useHttp().delete<FormControlVM>(`${environment.apiEndpont}${environment.api['form-api']['form-control'].getById}${id}`);
  }

  public static readonly active = (id: string): Promise<AxiosResponse<FormControlVM>> => {
    return useHttp().put<FormControlVM>(`${environment.apiEndpont}${environment.api['form-api']['form-control'].active}${id}`);
  }

  public static readonly deactive = (id: string): Promise<AxiosResponse<FormControlVM>> => {
    return useHttp().put<FormControlVM>(`${environment.apiEndpont}${environment.api['form-api']['form-control'].deactive}${id}`);
  }
}