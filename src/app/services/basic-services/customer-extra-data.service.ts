import { Observable } from "rxjs";
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { CustomerExtraDataCM, CustomerExtraDataUM, CustomerExtraDataVM } from "src/app/view-models";
import { environment } from "src/environments/environment";

export class CustomerExtraDataService {
  
  public static readonly findAll = (): Observable<CustomerExtraDataVM[]> => {
    return ajax.getJSON<CustomerExtraDataVM[]>(`${environment.apiEndpont}${environment.api['basic-api']['customer-extra-data'].main}`);
  }

  public static readonly findById = (id: string): Observable<CustomerExtraDataVM> => {
    return ajax.getJSON<CustomerExtraDataVM>(`${environment.apiEndpont}${environment.api['basic-api']['customer-extra-data'].getById}${id}`);
  }

  public static readonly insert = (data: CustomerExtraDataCM): Observable<AjaxResponse> => {
    return ajax.post(`${environment.apiEndpont}${environment.api['basic-api']['customer-extra-data'].main}`, data);
  }

  public static readonly update = (data: CustomerExtraDataUM): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['basic-api']['customer-extra-data'].main}`, data);
  }

  public static readonly remove = (id: string): Observable<AjaxResponse> => {
    return ajax.delete(`${environment.apiEndpont}${environment.api['basic-api']['customer-extra-data'].getById}${id}`);
  }

  public static readonly active = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['basic-api']['customer-extra-data'].active}${id}`);
  }

  public static readonly deactive = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['basic-api']['customer-extra-data'].deactive}${id}`);
  }
}