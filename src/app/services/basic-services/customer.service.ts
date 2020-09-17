import { Observable } from "rxjs";
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { CustomerCM, CustomerUM, CustomerVM } from "src/app/view-models";
import { environment } from "src/environments/environment";

export class CustomerService {
  
  public static readonly findAll = (): Observable<CustomerVM[]> => {
    return ajax.getJSON<CustomerVM[]>(`${environment.apiEndpont}${environment.api['basic-api']['customer'].main}`);
  }

  public static readonly findById = (id: string): Observable<CustomerVM> => {
    return ajax.getJSON<CustomerVM>(`${environment.apiEndpont}${environment.api['basic-api']['customer'].getById}${id}`);
  }

  public static readonly insert = (data: CustomerCM): Observable<AjaxResponse> => {
    return ajax.post(`${environment.apiEndpont}${environment.api['basic-api']['customer'].main}`, data);
  }

  public static readonly update = (data: CustomerUM): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['basic-api']['customer'].main}`, data);
  }

  public static readonly remove = (id: string): Observable<AjaxResponse> => {
    return ajax.delete(`${environment.apiEndpont}${environment.api['basic-api']['customer'].getById}${id}`);
  }

  public static readonly active = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['basic-api']['customer'].active}${id}`);
  }

  public static readonly deactive = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['basic-api']['customer'].deactive}${id}`);
  }
}