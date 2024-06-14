




import {  Button, Grid, TextField } from "@mui/material"
import { FormEvent, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getCompetitionToManage, saveCompetition } from "../../service/competitionService";
import Teams from "./ManageTeams";
import { ManageCompDto, initManageCompDto } from "../../dto/competition.dto";
import ManageTeams from "./ManageTeams";
import ManageReferees from "./ManageReferees";

function ManageSupervisor() {
    const competitionId = useParams()?.id;
    const navigate = useNavigate();
    const [competition, setCompetition] = useState<ManageCompDto>(initManageCompDto);
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");

    useEffect(()=>{
        if(competitionId){
            getData(competitionId);
        }
    },[competitionId])

    const getData = async (id:string) => {
        const res = await getCompetitionToManage(Number(id));
        setCompetition(res);  
    }

    const handleSaveCompetition = async(e:FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            const data = {email, phoneNumber, firstName,lastName};
            const res = await saveCompetition(data);
            if(res.result){
                navigate("");
            }
        }catch(error){
            console.log(error);
        }
    }


return (
    <Grid>
        <Grid>MANAGE COMPETITION </Grid>
        <Grid container>
            <Grid item md={3}>
                <ManageTeams competition={competition} refresh={getData}/>
            </Grid>
            <Grid item md={3}>
                <ManageReferees competition={competition} refresh={getData} /> 
            </Grid>
            <Grid item md={3}>
                <h5>SUPERVISORS</h5>
            </Grid>
            <Grid item md={3}>
                <h5>EDIT</h5>
            </Grid>
        </Grid>
    </Grid>
)
}
  
export default ManageSupervisor