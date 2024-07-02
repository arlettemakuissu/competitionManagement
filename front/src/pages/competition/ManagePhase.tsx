
import { Button, Grid } from "@mui/material"
import { useNavigate, useParams } from "react-router-dom"
import { ManageCompDto } from "../../dto/competition.dto";

interface ManagePhaseProps {
    competition: ManageCompDto;
}


function ManagePhase({  }:ManagePhaseProps) {
    const id = useParams().id;
    const navigate = useNavigate();


    return (
        <Grid>
            <Grid> 
                <Button variant="contained" onClick={()=>{navigate(`groups`)}}>
                PHASE DE GROUPE
                </Button> 
            </Grid>
            <Grid> 
                <Button  variant="contained" onClick={()=>{navigate(`elimination`)}}>
                PHASE ELIMINATOIRE
                </Button> 
            </Grid>
            
        </Grid>
    )
}
  
export default ManagePhase