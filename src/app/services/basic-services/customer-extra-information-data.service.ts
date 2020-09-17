import { Observable } from "rxjs";
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { CustomerExtraInformationDataCM, CustomerExtraInformationDataUM, CustomerExtraInformationDataVM } from "src/app/view-models";
import { environment } from "src/environments/environment";

export class CustomerExtraInformationDataService {
  
  public static readonly findAll = (): Observable<CustomerExtraInformationDataVM[]> => {
    return ajax.getJSON<CustomerExtraInformationDataVM[]>(`${environment.apiEndpont}${environment.api['basic-api']['customer-extra-information-data'].main}`);
  }

  public static readonly findById = (id: string): Observable<CustomerExtraInformationDataVM> => {
    return ajax.getJSON<CustomerExtraInformationDataVM>(`${environment.apiEndpont}${environment.api['basic-api']['customer-extra-information-data'].getById}${id}`);
  }

  public static readonly insert = (data: CustomerExtraInformationDataCM): Observable<AjaxResponse> => {
    return ajax.post(`${environment.apiEndpont}${environment.api['basic-api']['customer-extra-information-data'].main}`, data);
  }

  public static readonly update = (data: CustomerExtraInformationDataUM): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['basic-api']['customer-extra-information-data'].main}`, data);
  }

  public static readonly remove = (id: string): Observable<AjaxResponse> => {
    return ajax.delete(`${environment.apiEndpont}${environment.api['basic-api']['customer-extra-information-data'].getById}${id}`);
  }

  public static readonly active = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['basic-api']['customer-extra-information-data'].active}${id}`);
  }

  public static readonly deactive = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['basic-api']['customer-extra-information-data'].deactive}${id}`);
  }
}