import { useHttp } from '@extras/services';
import { AxiosResponse } from 'axios';
import { AccountCM, AccountUM, AccountVM } from '@view-models';
import { environment } from 'src/environments/environment';

export class AccountService {

  public static readonly findAll = (): Promise<AxiosResponse<AccountVM[]>> => {
    return useHttp().get<AccountVM[]>(`${environment.apiEndpont}${environment.api['account-api']['account'].main}`);
  }

  public static readonly findById = (id: string): Promise<AxiosResponse<AccountVM>> => {
    return useHttp().get<AccountVM>(`${environment.apiEndpont}${environment.api['account-api']['account'].getById}${id}`);
  }

  public static readonly insert = (data: AccountCM): Promise<AxiosResponse<AccountVM>> => {
    return useHttp().post<AccountVM>(`${environment.apiEndpont}${environment.api['account-api']['account'].main}`, data);
  }

  public static readonly update = (data: AccountUM): Promise<AxiosResponse<AccountVM>> => {
    return useHttp().put<AccountVM>(`${environment.apiEndpont}${environment.api['account-api']['account'].main}`, data);
  }

  public static readonly remove = (id: string): Promise<AxiosResponse<AccountVM>> => {
    return useHttp().delete<AccountVM>(`${environment.apiEndpont}${environment.api['account-api']['account'].getById}${id}`);
  }

  public static readonly active = (id: string): Promise<AxiosResponse<AccountVM>> => {
    return useHttp().put<AccountVM>(`${environment.apiEndpont}${environment.api['account-api']['account'].active}${id}`);
  }

  public static readonly deactive = (id: string): Promise<AxiosResponse<AccountVM>> => {
    return useHttp().put<AccountVM>(`${environment.apiEndpont}${environment.api['account-api']['account'].deactive}${id}`);
  }
}