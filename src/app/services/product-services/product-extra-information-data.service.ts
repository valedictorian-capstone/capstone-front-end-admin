import { useHttp } from '@extras/services';
import { AxiosResponse } from 'axios';
import { ProductExtraInformationDataCM, ProductExtraInformationDataUM, ProductExtraInformationDataVM } from '@view-models';
import { environment } from 'src/environments/environment';

export class ProductExtraInformationDataService {

  public static readonly findAll = (): Promise<AxiosResponse<ProductExtraInformationDataVM[]>> => {
    return useHttp().get<ProductExtraInformationDataVM[]>(`${environment.apiEndpont}${environment.api['product-api']['product-extra-information-data'].main}`);
  }

  public static readonly findById = (id: string): Promise<AxiosResponse<ProductExtraInformationDataVM>> => {
    return useHttp().get<ProductExtraInformationDataVM>(`${environment.apiEndpont}${environment.api['product-api']['product-extra-information-data'].getById}${id}`);
  }

  public static readonly insert = (data: ProductExtraInformationDataCM): Promise<AxiosResponse<ProductExtraInformationDataVM>> => {
    return useHttp().post<ProductExtraInformationDataVM>(`${environment.apiEndpont}${environment.api['product-api']['product-extra-information-data'].main}`, data);
  }

  public static readonly update = (data: ProductExtraInformationDataUM): Promise<AxiosResponse<ProductExtraInformationDataVM>> => {
    return useHttp().put<ProductExtraInformationDataVM>(`${environment.apiEndpont}${environment.api['product-api']['product-extra-information-data'].main}`, data);
  }

  public static readonly remove = (id: string): Promise<AxiosResponse<ProductExtraInformationDataVM>> => {
    return useHttp().delete<ProductExtraInformationDataVM>(`${environment.apiEndpont}${environment.api['product-api']['product-extra-information-data'].getById}${id}`);
  }

  public static readonly active = (id: string): Promise<AxiosResponse<ProductExtraInformationDataVM>> => {
    return useHttp().put<ProductExtraInformationDataVM>(`${environment.apiEndpont}${environment.api['product-api']['product-extra-information-data'].active}${id}`);
  }

  public static readonly deactive = (id: string): Promise<AxiosResponse<ProductExtraInformationDataVM>> => {
    return useHttp().put<ProductExtraInformationDataVM>(`${environment.apiEndpont}${environment.api['product-api']['product-extra-information-data'].deactive}${id}`);
  }
}