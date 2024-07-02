import { GenericResult } from "../dto/GenericResult";
import { CompetitionDto, ManageCompDto } from "../dto/competition.dto";
import { get, post } from "./api";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function saveCompetition(data:any): Promise<GenericResult>{

    const res = await post("api/v1/competitions", data);
    
    return res.data;
}

export async function getCompetitions(): Promise<CompetitionDto[]>{
    const res = await get("api/v1/competitions");
    return res.data;
}

export async function getCompetitionToManage(id:number): Promise<ManageCompDto>{
    const res = await get(`api/v1/competitions/${id}/manage`);
    return res.data;
}

