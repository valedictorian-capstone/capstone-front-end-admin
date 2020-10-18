import { useHttp } from '@extras/services';
import { AxiosResponse } from 'axios';
import { ProductCM, ProductUM, ProductVM } from '@view-models';
import { environment } from 'src/environments/environment';

export class ProductService {

  public static readonly findAll = (): Promise<AxiosResponse<ProductVM[]>> => {
    return useHttp().get<ProductVM[]>(`${environment.apiEndpont}${environment.api['product-api']['product'].main}`);
  }

  public static readonly findById = (id: string): Promise<AxiosResponse<ProductVM>> => {
    return useHttp().get<ProductVM>(`${environment.apiEndpont}${environment.api['product-api']['product'].getById}${id}`);
  }

  public static readonly insert = (data: ProductCM): Promise<AxiosResponse<ProductVM>> => {
    return useHttp().post<ProductVM>(`${environment.apiEndpont}${environment.api['product-api']['product'].main}`, data);
  }

  public static readonly update = (data: ProductUM): Promise<AxiosResponse<ProductVM>> => {
    return useHttp().put<ProductVM>(`${environment.apiEndpont}${environment.api['product-api']['product'].main}`, data);
  }

  public static readonly remove = (id: string): Promise<AxiosResponse<ProductVM>> => {
    return useHttp().delete<ProductVM>(`${environment.apiEndpont}${environment.api['product-api']['product'].getById}${id}`);
  }

  public static readonly active = (ids: string[]): Promise<AxiosResponse<ProductVM>> => {
    return useHttp().put<ProductVM>(`${environment.apiEndpont}${environment.api['product-api']['product'].active}`, ids);
  }

  public static readonly deactive = (ids: string[]): Promise<AxiosResponse<ProductVM>> => {
    return useHttp().put<ProductVM>(`${environment.apiEndpont}${environment.api['product-api']['product'].deactive}`, ids);
  }
}