

/* eslint-disable @typescript-eslint/no-explicit-any */

import {  Button, Grid, ListItemText, MenuItem, MenuList, Select } from "@mui/material"
import { ManageCompDto } from "../../dto/competition.dto";
import When from "../../component/atoms/When";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { assignSupervisorToCompetition } from "../../service/supervisorService";

interface ManageSupervisorProps {
    competition: ManageCompDto;
    refresh:  (id:string) => void;
}

function ManageSupervisor({ competition, refresh}:ManageSupervisorProps) {
    const competitionId = useParams()?.id;
    const [addSupervisor, setAddSupervisor] = useState(false);
    const [supervisorSelectedId, setSupervisorSelectedId] = useState<string | unknown>("");
    
    const handleAddSupervisors = async() => {
        try{
            const data = { supervisorId: supervisorSelectedId, competitionId };
            const res = await assignSupervisorToCompetition(data);
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
        setSupervisorSelectedId("");
        setAddSupervisor(false);
    }


    return (
        <Grid>
            <Grid textAlign="center" >ARBITRES </Grid>
            <Grid>
                <Button onClick={()=>{setAddSupervisor(true)}}  variant="contained" >AJOUTER UN SUPERVISOR</Button> 
            </Grid>
            
            <When condition={addSupervisor}>
                <Grid> 
                    <When condition={competition?.freeReferees?.length>0}>
                        <Select onChange={(e)=>{setSupervisorSelectedId(e.target.value)}} fullWidth placeholder="SELECTION UN ARBITRE PARMIS">
                        {
                            competition?.freeSupervisors?.map((supervisor,i)=>(
                                <MenuItem  value={supervisor.id} key={JSON.stringify({supervisor, i})}>
                                    <ListItemText>{supervisor.name} </ListItemText>
                                </MenuItem>
                            ))
                        }
                        </Select>
                    </When> 
                    
                    <When condition={!(competition?.freeSupervisors?.length>0)}>
                        <h5>IL FAUT AJOUTER VOS ARBITRES AVANT DE LES ASSOCIERS A UNE COMPETITION</h5>
                    </When> 
                    
                     <Grid container justifyContent="space-between">
                        <Button onClick={clean}  variant="contained" color="error">ANNULER</Button> 
                        <Button onClick={handleAddSupervisors}  variant="contained" color="success">AJOUTER</Button> 
                    </Grid>
                </Grid>
            </When>

            <When condition={competition?.supervisors?.length>0}>
                <MenuList>
                {
                    competition?.supervisors?.map((supervisor,i)=>(
                        <MenuItem sx={{backgroundColor: "#AAAAAA"}} key={JSON.stringify({supervisor, i})}>
                            <ListItemText>{supervisor.name} </ListItemText>
                        </MenuItem>
                    ))
                }
                </MenuList>
            </When> 
            <When condition={!(competition?.supervisors?.length>0)}>
                <h5 style={{textAlign:"center"}}>IL YA PAS DE SUPERVISORS</h5>
            </When> 
        </Grid>
    )
}
  
export default ManageSupervisor
