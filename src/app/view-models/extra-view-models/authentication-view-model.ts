import { AccountVM } from '../account-view-models';

export interface AuthenticationVM {
    readonly Id: string;
    readonly JWTToken: string;
    readonly Email: string;
    readonly Phone: string;
    readonly Password: string;
    readonly OldPassword?: string;
    readonly AccountVM: AccountVM;
    readonly IsLogin: string;
}

export interface AuthenticationCM {
    readonly Phone: string;
    readonly Password: string;
    readonly OldPassword: string;
    readonly ConfirmedCode: string;
}

export interface AuthenticationUM {
    readonly Id: string;
    readonly Token: string;
    readonly Value: string;
}