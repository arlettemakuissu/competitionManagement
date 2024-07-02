/* eslint-disable @typescript-eslint/no-explicit-any */
import { GenericResult } from "../dto/GenericResult";
import { SupervisorDto } from "../dto/supervisor.dto";
import { get, post } from "./api";

export async function saveSupervisor(data:SupervisorDto): Promise<GenericResult>{
    const res = await post("api/v1/supervisors", data);
    return res.data;
}

export async function getSupervisors(): Promise<SupervisorDto[]>{
    const res = await get("api/v1/supervisors");
    return res.data;
}

export async function assignSupervisorToCompetition(data:any): Promise<GenericResult>{
    const res = await post("api/v1/supervisors/assign", data);
    return res.data;
}

