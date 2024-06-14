

/* eslint-disable @typescript-eslint/no-explicit-any */

import {  Button, Grid, ListItemText, MenuItem, MenuList, TextField } from "@mui/material"
import { ManageCompDto } from "../../dto/competition.dto";
import When from "../../component/atoms/When";
import { useState } from "react";
import { saveTeam } from "../../service/teamService";
import { useParams } from "react-router-dom";

interface ManageTeamsProps {
    competition: ManageCompDto;
    refresh:  (id:string) => void;
}


function ManageTeams({ competition, refresh}:ManageTeamsProps) {
    const competitionId = useParams()?.id;
    const [addTeam, setAddTeam] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    
    const handleAddTeam = async() => {
        try{
            const data = { email, name, competitionId};
            const res = await saveTeam(data);
            if(res.result && competitionId){
                await refresh(competitionId);
                clean();
            }else{
                alert(res.message);
            }
        }catch(e){
            console.log(e);
        }
    }

    const clean = async() => {
        setName("");
        setEmail("");
        setAddTeam(false);
    }


    return (
        <Grid>
            <Grid textAlign="center" >TEAMS </Grid>
            <Grid>
                <Button onClick={()=>{setAddTeam(true)}}  variant="contained" >AJOUTER UNE EQUIPE</Button> 
            </Grid>
            
            <When condition={addTeam}>
                <Grid>
                    <TextField value={name} onChange={(e)=>{ setName(e.target.value)}} fullWidth placeholder="NOM DE L EQUIPE"/>
                    <TextField value={email} onChange={(e)=>{ setEmail(e.target.value)}} fullWidth placeholder="EAMIL DU RESPONSABLE DE L EQUIPE"/>
                    <Grid container justifyContent="space-between">
                        <Button onClick={clean}  variant="contained" color="error">ANNULER</Button> 
                        <Button onClick={handleAddTeam}  variant="contained" color="success">AJOUTER</Button> 
                    </Grid>
                </Grid>
            </When>

            <When condition={competition.teams.length>0}>
                <MenuList>
                {
                    competition.teams.map((team,i)=>(
                        <MenuItem sx={{backgroundColor: "#AAAAAA"}} key={JSON.stringify({team, i})}>
                            <ListItemText>{team.name} </ListItemText>
                        </MenuItem>
                    ))
                }
                </MenuList>
            </When> 
            <When condition={competition.teams.length<1}>
                <h5 style={{textAlign:"center"}}>IL YA PAS D EQUIPE</h5>
            </When> 
        </Grid>
    )
}
  
export default ManageTeams
