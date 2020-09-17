import { Observable } from "rxjs";
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { AccountExtraInformationDataCM, AccountExtraInformationDataUM, AccountExtraInformationDataVM } from "src/app/view-models";
import { environment } from "src/environments/environment";

export class AccountExtraInformationDataService {
  
  public static readonly findAll = (): Observable<AccountExtraInformationDataVM[]> => {
    return ajax.getJSON<AccountExtraInformationDataVM[]>(`${environment.apiEndpont}${environment.api['basic-api']['account-extra-information-data'].main}`);
  }

  public static readonly findById = (id: string): Observable<AccountExtraInformationDataVM> => {
    return ajax.getJSON<AccountExtraInformationDataVM>(`${environment.apiEndpont}${environment.api['basic-api']['account-extra-information-data'].getById}${id}`);
  }

  public static readonly insert = (data: AccountExtraInformationDataCM): Observable<AjaxResponse> => {
    return ajax.post(`${environment.apiEndpont}${environment.api['basic-api']['account-extra-information-data'].main}`, data);
  }

  public static readonly update = (data: AccountExtraInformationDataUM): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['basic-api']['account-extra-information-data'].main}`, data);
  }

  public static readonly remove = (id: string): Observable<AjaxResponse> => {
    return ajax.delete(`${environment.apiEndpont}${environment.api['basic-api']['account-extra-information-data'].getById}${id}`);
  }

  public static readonly active = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['basic-api']['account-extra-information-data'].active}${id}`);
  }

  public static readonly deactive = (id: string): Observable<AjaxResponse> => {
    return ajax.put(`${environment.apiEndpont}${environment.api['basic-api']['account-extra-information-data'].deactive}${id}`);
  }
}