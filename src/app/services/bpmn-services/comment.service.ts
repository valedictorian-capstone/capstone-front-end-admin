import { CommentCM, CommentUM, CommentVM } from '@view-models';
import { environment } from 'src/environments/environment';
import { AxiosResponse } from 'axios';
import { useHttp } from '@extras/services';

export class CommentService {

  public static readonly findAll = (): Promise<AxiosResponse<CommentVM[]>> => {
    return useHttp().get<CommentVM[]>(`${environment.apiEndpont}${environment.api['bpmn-api']['comment'].main}`);
  }

  public static readonly findById = (id: string): Promise<AxiosResponse<CommentVM>> => {
    return useHttp().get<CommentVM>(`${environment.apiEndpont}${environment.api['bpmn-api']['comment'].getById}${id}`);
  }

  public static readonly insert = (data: CommentCM): Promise<AxiosResponse<CommentVM>> => {
    return useHttp().post<CommentVM>(`${environment.apiEndpont}${environment.api['bpmn-api']['comment'].main}`, data);
  }

  public static readonly update = (data: CommentUM): Promise<AxiosResponse<CommentVM>> => {
    return useHttp().put<CommentVM>(`${environment.apiEndpont}${environment.api['bpmn-api']['comment'].main}`, data);
  }

  public static readonly remove = (id: string): Promise<AxiosResponse<CommentVM>> => {
    return useHttp().delete<CommentVM>(`${environment.apiEndpont}${environment.api['bpmn-api']['comment'].getById}${id}`);
  }

  public static readonly active = (id: string): Promise<AxiosResponse<CommentVM>> => {
    return useHttp().put<CommentVM>(`${environment.apiEndpont}${environment.api['bpmn-api']['comment'].active}${id}`);
  }

  public static readonly deactive = (id: string): Promise<AxiosResponse<CommentVM>> => {
    return useHttp().put<CommentVM>(`${environment.apiEndpont}${environment.api['bpmn-api']['comment'].deactive}${id}`);
  }
}