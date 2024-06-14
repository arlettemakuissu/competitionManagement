
export interface GenericResult {
    result:boolean,
    message:string,
    status:number,
}

export interface LoginResponse {
    result:boolean,
    token:string,
    firstName:string,
    lastName:string,
}