import { useHttp } from '@extras/services';
import { AxiosResponse } from 'axios';
import { FormDataCM, FormDataUM, FormDataVM } from '@view-models';
import { environment } from 'src/environments/environment';

export class FormDataService {

  public static readonly findAll = (): Promise<AxiosResponse<FormDataVM[]>> => {
    return useHttp().get<FormDataVM[]>(`${environment.apiEndpont}${environment.api['form-api']['form-data'].main}`);
  }

  public static readonly findById = (id: string): Promise<AxiosResponse<FormDataVM>> => {
    return useHttp().get<FormDataVM>(`${environment.apiEndpont}${environment.api['form-api']['form-data'].getById}${id}`);
  }

  public static readonly insert = (data: FormDataCM): Promise<AxiosResponse<FormDataVM>> => {
    return useHttp().post<FormDataVM>(`${environment.apiEndpont}${environment.api['form-api']['form-data'].main}`, data);
  }

  public static readonly update = (data: FormDataUM): Promise<AxiosResponse<FormDataVM>> => {
    return useHttp().put<FormDataVM>(`${environment.apiEndpont}${environment.api['form-api']['form-data'].main}`, data);
  }

  public static readonly remove = (id: string): Promise<AxiosResponse<FormDataVM>> => {
    return useHttp().delete<FormDataVM>(`${environment.apiEndpont}${environment.api['form-api']['form-data'].getById}${id}`);
  }

  public static readonly active = (id: string): Promise<AxiosResponse<FormDataVM>> => {
    return useHttp().put<FormDataVM>(`${environment.apiEndpont}${environment.api['form-api']['form-data'].active}${id}`);
  }

  public static readonly deactive = (id: string): Promise<AxiosResponse<FormDataVM>> => {
    return useHttp().put<FormDataVM>(`${environment.apiEndpont}${environment.api['form-api']['form-data'].deactive}${id}`);
  }
}