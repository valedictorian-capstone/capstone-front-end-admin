import { Observable } from "rxjs";
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { CustomerGroupCM, CustomerGroupUM, CustomerGroupVM } from "src/app/view-models";
import { environment } from "src/environments/environment";

export class CustomerGroupService {
  
  public static readonly findAll = (): Observable<CustomerGroupVM[]> => {
    return ajax.getJSON<CustomerGroupVM[]>(`${environment.apiEndpont}${environment.api['basic-api']['customer-group'].main}`);
  }

  public static readonly findById = (id: string): Observable<CustomerGroupVM> => {
    return ajax.getJSON<CustomerGroupVM>(`${environment.apiEndpont}${environment.api['basic-api']['customer-group'].getById}${id}`);
  }

  public static readonly insert = (data: CustomerGroupCM): Observable<AjaxResponse> => {
    return ajax.post(`${environment.apiEndpont}${environment.api['basic-api']['customer-group'].main}`, data);
  }

  public static readonly update = (data: CustomerGroupUM): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['basic-api']['customer-group'].main}`, data);
  }

  public static readonly remove = (id: string): Observable<AjaxResponse> => {
    return ajax.delete(`${environment.apiEndpont}${environment.api['basic-api']['customer-group'].getById}${id}`);
  }

  public static readonly active = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['basic-api']['customer-group'].active}${id}`);
  }

  public static readonly deactive = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['basic-api']['customer-group'].deactive}${id}`);
  }
}