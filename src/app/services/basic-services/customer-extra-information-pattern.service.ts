import { Observable } from "rxjs";
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { CustomerExtraInformationPatternCM, CustomerExtraInformationPatternUM, CustomerExtraInformationPatternVM } from "src/app/view-models";
import { environment } from "src/environments/environment";

export class CustomerExtraInformationPatternService {
  
  public static readonly findAll = (): Observable<CustomerExtraInformationPatternVM[]> => {
    return ajax.getJSON<CustomerExtraInformationPatternVM[]>(`${environment.apiEndpont}${environment.api['basic-api']['customer-extra-information-pattern'].main}`);
  }

  public static readonly findById = (id: string): Observable<CustomerExtraInformationPatternVM> => {
    return ajax.getJSON<CustomerExtraInformationPatternVM>(`${environment.apiEndpont}${environment.api['basic-api']['customer-extra-information-pattern'].getById}${id}`);
  }

  public static readonly insert = (data: CustomerExtraInformationPatternCM): Observable<AjaxResponse> => {
    return ajax.post(`${environment.apiEndpont}${environment.api['basic-api']['customer-extra-information-pattern'].main}`, data);
  }

  public static readonly update = (data: CustomerExtraInformationPatternUM): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['basic-api']['customer-extra-information-pattern'].main}`, data);
  }

  public static readonly remove = (id: string): Observable<AjaxResponse> => {
    return ajax.delete(`${environment.apiEndpont}${environment.api['basic-api']['customer-extra-information-pattern'].getById}${id}`);
  }

  public static readonly active = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['basic-api']['customer-extra-information-pattern'].active}${id}`);
  }

  public static readonly deactive = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['basic-api']['customer-extra-information-pattern'].deactive}${id}`);
  }
}