

/* eslint-disable @typescript-eslint/no-explicit-any */

import {  Button, Grid, ListItemText, MenuItem, MenuList, Select, TextField } from "@mui/material"
import { ManageCompDto } from "../../dto/competition.dto";
import When from "../../component/atoms/When";
import { useState } from "react";
import { saveTeam } from "../../service/teamService";
import { useParams } from "react-router-dom";

interface ManageRefereesProps {
    competition: ManageCompDto;
    refresh:  (id:string) => void;
}

function ManageReferees({ competition, refresh}:ManageRefereesProps) {
    const competitionId = useParams()?.id;
    const [addReferee, setAddReferee] = useState(false);
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
        setAddReferee(false);
    }


    return (
        <Grid>
            <Grid textAlign="center" >ARBITRES </Grid>
            <Grid>
                <Button onClick={()=>{setAddReferee(true)}}  variant="contained" >AJOUTER UN ARBITRE</Button> 
            </Grid>
            
            <When condition={addReferee}>
                <Grid> 
                    <When condition={competition?.referees?.length>0}>
                        <Select fullWidth placeholder="SELECTION UN ARBITRE PARMIS">
                        {
                            competition?.referees?.map((referee,i)=>(
                                <MenuItem  value={referee.id} sx={{backgroundColor: "#AAAAAA"}} key={JSON.stringify({referee, i})}>
                                    <ListItemText>{referee.label} </ListItemText>
                                </MenuItem>
                            ))
                        }
                        </Select>
                    </When> 
                    
                    <TextField value={name} onChange={(e)=>{ setName(e.target.value)}} fullWidth placeholder="NOM DE L EQUIPE"/>
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
            <When condition={!(competition?.referees?.length>0)}>
                <h5 style={{textAlign:"center"}}>IL YA PAS D ARBITRE</h5>
            </When> 
        </Grid>
    )
}
  
export default ManageReferees
