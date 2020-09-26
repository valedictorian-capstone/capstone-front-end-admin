import { AccountVM } from '../account-view-models';

export interface AuthenticationVM {
    readonly AccountVM: AccountVM;
    readonly IsLogin: boolean;
    readonly Token: string;
}

export interface AuthenticationCM {
    // readonly Token: string;
    readonly Phone: string;
    readonly Password: string;
}

export interface AuthenticationUM {
    readonly Phone: string;
    readonly Password: string;
    readonly OldPassword: string;
    readonly Code?: string;
}