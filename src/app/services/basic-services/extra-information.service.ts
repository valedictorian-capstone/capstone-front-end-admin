import { useHttp } from '@extras/services';
import { AxiosResponse } from 'axios';
import { ExtraInformationCM, ExtraInformationUM, ExtraInformationVM } from '@view-models';
import { environment } from 'src/environments/environment';

export class ExtraInformationService {

  public static readonly findAll = (state: 'customer' | 'account' | 'product'): Promise<AxiosResponse<ExtraInformationVM[]>> => {
    return useHttp().get<ExtraInformationVM[]>(`${environment.apiEndpont}${environment.api['basic-api']['extra-information'].main}?state=${state}`);
  }

  public static readonly findById = (id: string): Promise<AxiosResponse<ExtraInformationVM>> => {
    return useHttp().get<ExtraInformationVM>(`${environment.apiEndpont}${environment.api['basic-api']['extra-information'].getById}${id}`);
  }

  public static readonly insert = (data: ExtraInformationCM): Promise<AxiosResponse<ExtraInformationVM>> => {
    return useHttp().post<ExtraInformationVM>(`${environment.apiEndpont}${environment.api['basic-api']['extra-information'].main}`, data);
  }

  public static readonly update = (data: ExtraInformationUM[]): Promise<AxiosResponse<ExtraInformationVM>> => {
    return useHttp().put<ExtraInformationVM>(`${environment.apiEndpont}${environment.api['basic-api']['extra-information'].main}`, data);
  }

  public static readonly remove = (id: string): Promise<AxiosResponse<ExtraInformationVM>> => {
    return useHttp().delete<ExtraInformationVM>(`${environment.apiEndpont}${environment.api['basic-api']['extra-information'].getById}${id}`);
  }

  public static readonly active = (ids: string[]): Promise<AxiosResponse<ExtraInformationVM>> => {
    return useHttp().put<ExtraInformationVM>(`${environment.apiEndpont}${environment.api['basic-api']['extra-information'].active}`, ids);
  }

  public static readonly deactive = (ids: string[]): Promise<AxiosResponse<ExtraInformationVM>> => {
    return useHttp().put<ExtraInformationVM>(`${environment.apiEndpont}${environment.api['basic-api']['extra-information'].deactive}`, ids);
  }
}