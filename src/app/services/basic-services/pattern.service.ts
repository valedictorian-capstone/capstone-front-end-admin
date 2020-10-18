import { useHttp } from '@extras/services';
import { AxiosResponse } from 'axios';
import { PatternCM, PatternUM, PatternVM } from '@view-models';
import { environment } from 'src/environments/environment';

export class PatternService {

  public static readonly findAll = (): Promise<AxiosResponse<PatternVM[]>> => {
    return useHttp().get<PatternVM[]>(`${environment.apiEndpont}${environment.api['basic-api']['pattern'].main}`);
  }

  public static readonly findById = (id: string): Promise<AxiosResponse<PatternVM>> => {
    return useHttp().get<PatternVM>(`${environment.apiEndpont}${environment.api['basic-api']['pattern'].getById}${id}`);
  }

  public static readonly insert = (data: PatternCM): Promise<AxiosResponse<PatternVM>> => {
    return useHttp().post<PatternVM>(`${environment.apiEndpont}${environment.api['basic-api']['pattern'].main}`, data);
  }

  public static readonly update = (data: PatternUM): Promise<AxiosResponse<PatternVM>> => {
    return useHttp().put<PatternVM>(`${environment.apiEndpont}${environment.api['basic-api']['pattern'].main}`, data);
  }

  public static readonly remove = (id: string): Promise<AxiosResponse<PatternVM>> => {
    return useHttp().delete<PatternVM>(`${environment.apiEndpont}${environment.api['basic-api']['pattern'].getById}${id}`);
  }

  public static readonly active = (ids: string[]): Promise<AxiosResponse<PatternVM>> => {
    return useHttp().put<PatternVM>(`${environment.apiEndpont}${environment.api['basic-api']['pattern'].active}`, ids);
  }

  public static readonly deactive = (ids: string[]): Promise<AxiosResponse<PatternVM>> => {
    return useHttp().put<PatternVM>(`${environment.apiEndpont}${environment.api['basic-api']['pattern'].deactive}`, ids);
  }
}