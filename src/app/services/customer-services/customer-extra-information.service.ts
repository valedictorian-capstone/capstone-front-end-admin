import { useHttp } from '@extras/services';
import { AxiosResponse } from 'axios';
import { CustomerExtraInformationCM, CustomerExtraInformationUM, CustomerExtraInformationVM } from '@view-models';
import { environment } from 'src/environments/environment';

export class CustomerExtraInformationService {

  public static readonly findAll = (): Promise<AxiosResponse<CustomerExtraInformationVM[]>> => {
    return useHttp().get<CustomerExtraInformationVM[]>(`${environment.apiEndpont}${environment.api['customer-api']['customer-extra-information'].main}`);
  }

  public static readonly findById = (id: string): Promise<AxiosResponse<CustomerExtraInformationVM>> => {
    return useHttp().get<CustomerExtraInformationVM>(`${environment.apiEndpont}${environment.api['customer-api']['customer-extra-information'].getById}${id}`);
  }

  public static readonly insert = (data: CustomerExtraInformationCM): Promise<AxiosResponse<CustomerExtraInformationVM>> => {
    return useHttp().post<CustomerExtraInformationVM>(`${environment.apiEndpont}${environment.api['customer-api']['customer-extra-information'].main}`, data);
  }

  public static readonly update = (data: CustomerExtraInformationUM[]): Promise<AxiosResponse<CustomerExtraInformationVM>> => {
    return useHttp().put<CustomerExtraInformationVM>(`${environment.apiEndpont}${environment.api['customer-api']['customer-extra-information'].main}`, data);
  }

  public static readonly remove = (id: string): Promise<AxiosResponse<CustomerExtraInformationVM>> => {
    return useHttp().delete<CustomerExtraInformationVM>(`${environment.apiEndpont}${environment.api['customer-api']['customer-extra-information'].getById}${id}`);
  }

  public static readonly active = (ids: string[]): Promise<AxiosResponse<CustomerExtraInformationVM>> => {
    return useHttp().put<CustomerExtraInformationVM>(`${environment.apiEndpont}${environment.api['customer-api']['customer-extra-information'].active}`, ids);
  }

  public static readonly deactive = (ids: string[]): Promise<AxiosResponse<CustomerExtraInformationVM>> => {
    return useHttp().put<CustomerExtraInformationVM>(`${environment.apiEndpont}${environment.api['customer-api']['customer-extra-information'].deactive}`, ids);
  }
}