import { useHttp } from '@extras/services';
import { AxiosResponse } from 'axios';
import { AuthenticationVM, AuthenticationCM, AuthenticationUM, AccountVM } from '@view-models';
import { environment } from 'src/environments/environment';

export class AuthenticationService {

  public static readonly findAll = (): Promise<AxiosResponse<AuthenticationVM[]>> => {
    return useHttp().get<AuthenticationVM[]>(`${environment.apiEndpont}${environment.api['extra-api']['auth'].main}`);
  }

  public static readonly findById = (id: string): Promise<AxiosResponse<AuthenticationVM>> => {
    return useHttp().get<AuthenticationVM>(`${environment.apiEndpont}${environment.api['extra-api']['auth'].getById}${id}`);
  }

  public static readonly authenticate = (data: string = ''): Promise<AxiosResponse<AuthenticationVM>> => {
    return useHttp().post<AuthenticationVM>(`${environment.apiEndpont}${environment.api['extra-api']['auth'].main}`, data);
  }

  public static readonly checkLogin = (data: string = 'false') => {
    const accountVM: AccountVM = {} as any;
    const result: AuthenticationVM = {
      Id: 'string',
      JWTToken: 'string',
      Email: 'string',
      Phone: '0000000000',
      Password: 'string',
      OldPassword: 'string',
      AccountVM: accountVM,
      IsLogin: data,
    };
    return result;
  }

  public static readonly insert = (data: AuthenticationCM): Promise<AxiosResponse<AuthenticationVM>> => {
    return useHttp().post<AuthenticationVM>(`${environment.apiEndpont}${environment.api['extra-api']['auth'].main}`, data);
  }
  public static readonly login = (data: AuthenticationCM): Promise<AxiosResponse<AuthenticationVM>> => {
    return useHttp().post<AuthenticationVM>(`${environment.apiEndpont}${environment.api['extra-api']['auth'].login}`, data);
  }

  public static readonly update = (data: AuthenticationUM): Promise<AxiosResponse<AuthenticationVM>> => {
    return useHttp().put<AuthenticationVM>(`${environment.apiEndpont}${environment.api['extra-api']['auth'].main}`, data);
  }

  public static readonly remove = (id: string): Promise<AxiosResponse<AuthenticationVM>> => {
    return useHttp().delete<AuthenticationVM>(`${environment.apiEndpont}${environment.api['extra-api']['auth'].getById}${id}`);
  }

  public static readonly active = (id: string): Promise<AxiosResponse<AuthenticationVM>> => {
    return useHttp().put<AuthenticationVM>(`${environment.apiEndpont}${environment.api['extra-api']['auth'].active}${id}`);
  }

  public static readonly deactive = (id: string): Promise<AxiosResponse<AuthenticationVM>> => {
    return useHttp().put<AuthenticationVM>(`${environment.apiEndpont}${environment.api['extra-api']['auth'].deactive}${id}`);
  }
}