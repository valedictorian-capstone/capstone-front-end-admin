import { useHttp } from '@extras/services';
import { AxiosResponse } from 'axios';
import { AccountExtraInformationDataCM, AccountExtraInformationDataUM, AccountExtraInformationDataVM } from '@view-models';
import { environment } from 'src/environments/environment';

export class AccountExtraInformationDataService {

  public static readonly findAll = (): Promise<AxiosResponse<AccountExtraInformationDataVM[]>> => {
    return useHttp().get<AccountExtraInformationDataVM[]>(`${environment.apiEndpont}${environment.api['account-api']['account-extra-information'].main}`);
  }

  public static readonly findById = (id: string): Promise<AxiosResponse<AccountExtraInformationDataVM>> => {
    return useHttp().get<AccountExtraInformationDataVM>(`${environment.apiEndpont}${environment.api['account-api']['account-extra-information'].getById}${id}`);
  }

  public static readonly insert = (data: AccountExtraInformationDataCM): Promise<AxiosResponse<AccountExtraInformationDataVM>> => {
    return useHttp().post<AccountExtraInformationDataVM>(`${environment.apiEndpont}${environment.api['account-api']['account-extra-information'].main}`, data);
  }

  public static readonly update = (data: AccountExtraInformationDataUM): Promise<AxiosResponse<AccountExtraInformationDataVM>> => {
    return useHttp().put<AccountExtraInformationDataVM>(`${environment.apiEndpont}${environment.api['account-api']['account-extra-information'].main}`, data);
  }

  public static readonly remove = (id: string): Promise<AxiosResponse<AccountExtraInformationDataVM>> => {
    return useHttp().delete<AccountExtraInformationDataVM>(`${environment.apiEndpont}${environment.api['account-api']['account-extra-information'].getById}${id}`);
  }

  public static readonly active = (id: string): Promise<AxiosResponse<AccountExtraInformationDataVM>> => {
    return useHttp().put<AccountExtraInformationDataVM>(`${environment.apiEndpont}${environment.api['account-api']['account-extra-information'].active}${id}`);
  }

  public static readonly deactive = (id: string): Promise<AxiosResponse<AccountExtraInformationDataVM>> => {
    return useHttp().put<AccountExtraInformationDataVM>(`${environment.apiEndpont}${environment.api['account-api']['account-extra-information'].deactive}${id}`);
  }
}