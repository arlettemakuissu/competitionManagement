

/* eslint-disable @typescript-eslint/no-explicit-any */

import {  Button, Grid, ListItemText, MenuItem, MenuList, Select } from "@mui/material"
import { ManageCompDto } from "../../dto/competition.dto";
import When from "../../component/atoms/When";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { assignRefereeToCompetition } from "../../service/refereeService";

interface ManageRefereesProps {
    competition: ManageCompDto;
    refresh:  (id:string) => void;
}

function ManageReferees({ competition, refresh}:ManageRefereesProps) {
    const competitionId = useParams()?.id;
    const [addReferee, setAddReferee] = useState(false);
    const [refereeSelectedId, setRefereeSelected] = useState<string | unknown>("");
    
    const handleAddReferee = async() => {
        try{
            const data = { refereeId: refereeSelectedId, competitionId };
            const res = await assignRefereeToCompetition(data);
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
        setRefereeSelected("");
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
                    <When condition={competition?.freeReferees?.length>0}>
                        <Select onChange={(e)=>{setRefereeSelected(e.target.value)}} fullWidth placeholder="SELECTION UN ARBITRE PARMIS">
                        {
                            competition?.freeReferees?.map((referee,i)=>(
                                <MenuItem  value={referee.id} key={JSON.stringify({referee, i})}>
                                    <ListItemText>{referee.name} </ListItemText>
                                </MenuItem>
                            ))
                        }
                        </Select>
                    </When> 
                    
                    <When condition={!(competition?.freeReferees?.length>0)}>
                        <h5>IL FAUT AJOUTER VOS ARBITRES AVANT DE LES ASSOCIERS A UNE COMPETITION</h5>
                    </When> 
                    
                     <Grid container justifyContent="space-between">
                        <Button onClick={clean}  variant="contained" color="error">ANNULER</Button> 
                        <Button onClick={handleAddReferee}  variant="contained" color="success">AJOUTER</Button> 
                    </Grid>
                </Grid>
            </When>

            <When condition={competition?.referees?.length>0}>
                <MenuList>
                {
                    competition?.referees?.map((team,i)=>(
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
