import { useHttp } from '@extras/services';
import { AxiosResponse } from 'axios';
import { CustomerExtraInformationDataCM, CustomerExtraInformationDataUM, CustomerExtraInformationDataVM } from '@view-models';
import { environment } from 'src/environments/environment';

export class CustomerExtraInformationDataService {

  public static readonly findAll = (): Promise<AxiosResponse<CustomerExtraInformationDataVM[]>> => {
    return useHttp().get<CustomerExtraInformationDataVM[]>(`${environment.apiEndpont}${environment.api['customer-api']['customer-extra-information-data'].main}`);
  }

  public static readonly findById = (id: string): Promise<AxiosResponse<CustomerExtraInformationDataVM>> => {
    return useHttp().get<CustomerExtraInformationDataVM>(`${environment.apiEndpont}${environment.api['customer-api']['customer-extra-information-data'].getById}${id}`);
  }

  public static readonly insert = (data: CustomerExtraInformationDataCM): Promise<AxiosResponse<CustomerExtraInformationDataVM>> => {
    return useHttp().post<CustomerExtraInformationDataVM>(`${environment.apiEndpont}${environment.api['customer-api']['customer-extra-information-data'].main}`, data);
  }

  public static readonly update = (data: CustomerExtraInformationDataUM): Promise<AxiosResponse<CustomerExtraInformationDataVM>> => {
    return useHttp().put<CustomerExtraInformationDataVM>(`${environment.apiEndpont}${environment.api['customer-api']['customer-extra-information-data'].main}`, data);
  }

  public static readonly remove = (id: string): Promise<AxiosResponse<CustomerExtraInformationDataVM>> => {
    return useHttp().delete<CustomerExtraInformationDataVM>(`${environment.apiEndpont}${environment.api['customer-api']['customer-extra-information-data'].getById}${id}`);
  }

  public static readonly active = (id: string): Promise<AxiosResponse<CustomerExtraInformationDataVM>> => {
    return useHttp().put<CustomerExtraInformationDataVM>(`${environment.apiEndpont}${environment.api['customer-api']['customer-extra-information-data'].active}${id}`);
  }

  public static readonly deactive = (id: string): Promise<AxiosResponse<CustomerExtraInformationDataVM>> => {
    return useHttp().put<CustomerExtraInformationDataVM>(`${environment.apiEndpont}${environment.api['customer-api']['customer-extra-information-data'].deactive}${id}`);
  }
}