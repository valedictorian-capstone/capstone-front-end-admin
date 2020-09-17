import { Observable } from "rxjs";
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { CustomerExtraInformationCM, CustomerExtraInformationUM, CustomerExtraInformationVM } from "src/app/view-models";
import { environment } from "src/environments/environment";

export class CustomerExtraInformationService {
  
  public static readonly findAll = (): Observable<CustomerExtraInformationVM[]> => {
    return ajax.getJSON<CustomerExtraInformationVM[]>(`${environment.apiEndpont}${environment.api['basic-api']['customer-extra-information'].main}`);
  }

  public static readonly findById = (id: string): Observable<CustomerExtraInformationVM> => {
    return ajax.getJSON<CustomerExtraInformationVM>(`${environment.apiEndpont}${environment.api['basic-api']['customer-extra-information'].getById}${id}`);
  }

  public static readonly insert = (data: CustomerExtraInformationCM): Observable<AjaxResponse> => {
    return ajax.post(`${environment.apiEndpont}${environment.api['basic-api']['customer-extra-information'].main}`, data);
  }

  public static readonly update = (data: CustomerExtraInformationUM): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['basic-api']['customer-extra-information'].main}`, data);
  }

  public static readonly remove = (id: string): Observable<AjaxResponse> => {
    return ajax.delete(`${environment.apiEndpont}${environment.api['basic-api']['customer-extra-information'].getById}${id}`);
  }

  public static readonly active = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['basic-api']['customer-extra-information'].active}${id}`);
  }

  public static readonly deactive = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['basic-api']['customer-extra-information'].deactive}${id}`);
  }
}