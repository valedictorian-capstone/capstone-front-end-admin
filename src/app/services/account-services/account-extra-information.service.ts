import { useHttp } from '@extras/services';
import { AxiosResponse } from 'axios';
import { AccountExtraInformationCM, AccountExtraInformationUM, AccountExtraInformationVM } from '@view-models';
import { environment } from 'src/environments/environment';

export class AccountExtraInformationService {

  public static readonly findAll = (): Promise<AxiosResponse<AccountExtraInformationVM[]>> => {
    return useHttp().get<AccountExtraInformationVM[]>(`${environment.apiEndpont}${environment.api['account-api']['account-extra-information'].main}`);
  }

  public static readonly findById = (id: string): Promise<AxiosResponse<AccountExtraInformationVM>> => {
    return useHttp().get<AccountExtraInformationVM>(`${environment.apiEndpont}${environment.api['account-api']['account-extra-information'].getById}${id}`);
  }

  public static readonly insert = (data: AccountExtraInformationCM): Promise<AxiosResponse<AccountExtraInformationVM>> => {
    return useHttp().post<AccountExtraInformationVM>(`${environment.apiEndpont}${environment.api['account-api']['account-extra-information'].main}`, data);
  }

  public static readonly update = (data: AccountExtraInformationUM): Promise<AxiosResponse<AccountExtraInformationVM>> => {
    return useHttp().put<AccountExtraInformationVM>(`${environment.apiEndpont}${environment.api['account-api']['account-extra-information'].main}`, data);
  }

  public static readonly remove = (id: string): Promise<AxiosResponse<AccountExtraInformationVM>> => {
    return useHttp().delete<AccountExtraInformationVM>(`${environment.apiEndpont}${environment.api['account-api']['account-extra-information'].getById}${id}`);
  }

  public static readonly active = (id: string): Promise<AxiosResponse<AccountExtraInformationVM>> => {
    return useHttp().put<AccountExtraInformationVM>(`${environment.apiEndpont}${environment.api['account-api']['account-extra-information'].active}${id}`);
  }

  public static readonly deactive = (id: string): Promise<AxiosResponse<AccountExtraInformationVM>> => {
    return useHttp().put<AccountExtraInformationVM>(`${environment.apiEndpont}${environment.api['account-api']['account-extra-information'].deactive}${id}`);
  }
}