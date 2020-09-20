import { useHttp } from '@extras/services';
import { AxiosResponse } from 'axios';
import { CustomerCM, CustomerUM, CustomerVM } from '@view-models';
import { environment } from 'src/environments/environment';

export class CustomerService {

  public static readonly findAll = (): Promise<AxiosResponse<CustomerVM[]>> => {
    return useHttp().get<CustomerVM[]>(`${environment.apiEndpont}${environment.api['customer-api']['customer'].main}`);
  }

  public static readonly findById = (id: string): Promise<AxiosResponse<CustomerVM>> => {
    return useHttp().get<CustomerVM>(`${environment.apiEndpont}${environment.api['customer-api']['customer'].getById}${id}`);
  }

  public static readonly insert = (data: CustomerCM): Promise<AxiosResponse<CustomerVM>> => {
    return useHttp().post<CustomerVM>(`${environment.apiEndpont}${environment.api['customer-api']['customer'].main}`, data);
  }

  public static readonly update = (data: CustomerUM): Promise<AxiosResponse<CustomerVM>> => {
    return useHttp().put<CustomerVM>(`${environment.apiEndpont}${environment.api['customer-api']['customer'].main}`, data);
  }

  public static readonly remove = (id: string): Promise<AxiosResponse<CustomerVM>> => {
    return useHttp().delete<CustomerVM>(`${environment.apiEndpont}${environment.api['customer-api']['customer'].getById}${id}`);
  }

  public static readonly active = (id: string): Promise<AxiosResponse<CustomerVM>> => {
    return useHttp().put<CustomerVM>(`${environment.apiEndpont}${environment.api['customer-api']['customer'].active}${id}`);
  }

  public static readonly deactive = (id: string): Promise<AxiosResponse<CustomerVM>> => {
    return useHttp().put<CustomerVM>(`${environment.apiEndpont}${environment.api['customer-api']['customer'].deactive}${id}`);
  }
}