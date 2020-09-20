import { useHttp } from '@extras/services';
import { AxiosResponse } from 'axios';
import { CustomerExtraDataCM, CustomerExtraDataUM, CustomerExtraDataVM } from '@view-models';
import { environment } from 'src/environments/environment';

export class CustomerExtraDataService {

  public static readonly findAll = (): Promise<AxiosResponse<CustomerExtraDataVM[]>> => {
    return useHttp().get<CustomerExtraDataVM[]>(`${environment.apiEndpont}${environment.api['customer-api']['customer-extra-data'].main}`);
  }

  public static readonly findById = (id: string): Promise<AxiosResponse<CustomerExtraDataVM>> => {
    return useHttp().get<CustomerExtraDataVM>(`${environment.apiEndpont}${environment.api['customer-api']['customer-extra-data'].getById}${id}`);
  }

  public static readonly insert = (data: CustomerExtraDataCM): Promise<AxiosResponse<CustomerExtraDataVM>> => {
    return useHttp().post<CustomerExtraDataVM>(`${environment.apiEndpont}${environment.api['customer-api']['customer-extra-data'].main}`, data);
  }

  public static readonly update = (data: CustomerExtraDataUM): Promise<AxiosResponse<CustomerExtraDataVM>> => {
    return useHttp().put<CustomerExtraDataVM>(`${environment.apiEndpont}${environment.api['customer-api']['customer-extra-data'].main}`, data);
  }

  public static readonly remove = (id: string): Promise<AxiosResponse<CustomerExtraDataVM>> => {
    return useHttp().delete<CustomerExtraDataVM>(`${environment.apiEndpont}${environment.api['customer-api']['customer-extra-data'].getById}${id}`);
  }

  public static readonly active = (id: string): Promise<AxiosResponse<CustomerExtraDataVM>> => {
    return useHttp().put<CustomerExtraDataVM>(`${environment.apiEndpont}${environment.api['customer-api']['customer-extra-data'].active}${id}`);
  }

  public static readonly deactive = (id: string): Promise<AxiosResponse<CustomerExtraDataVM>> => {
    return useHttp().put<CustomerExtraDataVM>(`${environment.apiEndpont}${environment.api['customer-api']['customer-extra-data'].deactive}${id}`);
  }
}