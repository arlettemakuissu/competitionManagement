
export interface CompetitionDto {
    id?: number;
    name:string;
    address:string;
    dateStart:string;
    dateEnd:string;
    nbTeam:number;
    nbGroupe:number;
    nbQualified:number;
}



export interface ManageCompDto {
    info: CreateEditCompetitionDto;
    teams:TeamSelectDto[];
    supervisors:OptionDto[];
    referees:OptionDto[];
    freeSupervisors:OptionDto[];
    freeReferees:OptionDto[];
}

export interface TeamSelectDto {
    id: number;
    name:string;
    email:string;
}


export interface OptionDto {
    id: number;
    label:string;
}



export interface CreateEditCompetitionDto {
    id?: number;
    name:string;
    address:string;
    dateStart:string;
    dateEnd:string;
    nbTeam:number;
    nbGroupe:number;
    nbQualified:number;
}


export const intiOptionDto = {
    id: 1,
    label:"string"
}
export const initCreateEditCompetitionDto = {
    id: 1,
    name:"string",
    address:"string",
    dateStart:"string",
    dateEnd:"string",
    nbTeam:1,
    nbGroupe:1,
    nbQualified:1
}
export const initManageCompDto = {
    info: initCreateEditCompetitionDto,
    teams:[],
    supervisors:[],
    referees:[],
    freeSupervisors:[],
    freeReferees:[]
}

