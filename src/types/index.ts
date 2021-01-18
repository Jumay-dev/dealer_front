// @ts-ignore
export interface Entity {
    id: number;
    text?: string;
    value?: number;
}

export interface User extends Entity {
    username: string;
    fullname: string;
    email: string;
    phone: string;
}