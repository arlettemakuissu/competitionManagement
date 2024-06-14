import { GenericResult, LoginResponse } from "../dto/GenericResult";
import { post } from "./api";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function register(data:any): Promise<GenericResult>{

    const res = await post("api/v1/register", data);
    
    return res.data;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function login(data:any): Promise<LoginResponse>{
    const res = await post("api/v1/login", data);
    return res.data;
}