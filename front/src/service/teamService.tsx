import { GenericResult } from "../dto/GenericResult";
import { RefereeDto } from "../dto/referee.dto";
import { get, post } from "./api";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function saveTeam(data:any): Promise<GenericResult>{

    const res = await post("api/v1/teams", data);
    
    return res.data;
}

export async function getReferees(): Promise<RefereeDto[]>{
    const res = await get("api/v1/referees");
    return res.data;
}
