import { useHttp } from '@extras/services';
import { AxiosResponse } from 'axios';
import { AccountExtraDataCM, AccountExtraDataUM, AccountExtraDataVM } from '@view-models';
import { environment } from 'src/environments/environment';

export class AccountExtraDataService {

  public static readonly findAll = (): Promise<AxiosResponse<AccountExtraDataVM[]>> => {
    return useHttp().get<AccountExtraDataVM[]>(`${environment.apiEndpont}${environment.api['account-api']['account-extra-data'].main}`);
  }

  public static readonly findById = (id: string): Promise<AxiosResponse<AccountExtraDataVM>> => {
    return useHttp().get<AccountExtraDataVM>(`${environment.apiEndpont}${environment.api['account-api']['account-extra-data'].getById}${id}`);
  }

  public static readonly insert = (data: AccountExtraDataCM): Promise<AxiosResponse<AccountExtraDataVM>> => {
    return useHttp().post<AccountExtraDataVM>(`${environment.apiEndpont}${environment.api['account-api']['account-extra-data'].main}`, data);
  }

  public static readonly update = (data: AccountExtraDataUM): Promise<AxiosResponse<AccountExtraDataVM>> => {
    return useHttp().put<AccountExtraDataVM>(`${environment.apiEndpont}${environment.api['account-api']['account-extra-data'].main}`, data);
  }

  public static readonly remove = (id: string): Promise<AxiosResponse<AccountExtraDataVM>> => {
    return useHttp().delete<AccountExtraDataVM>(`${environment.apiEndpont}${environment.api['account-api']['account-extra-data'].getById}${id}`);
  }

  public static readonly active = (id: string): Promise<AxiosResponse<AccountExtraDataVM>> => {
    return useHttp().put<AccountExtraDataVM>(`${environment.apiEndpont}${environment.api['account-api']['account-extra-data'].active}${id}`);
  }

  public static readonly deactive = (id: string): Promise<AxiosResponse<AccountExtraDataVM>> => {
    return useHttp().put<AccountExtraDataVM>(`${environment.apiEndpont}${environment.api['account-api']['account-extra-data'].deactive}${id}`);
  }
}