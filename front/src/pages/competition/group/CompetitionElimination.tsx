


import { Button, Grid } from "@mui/material"
import { useNavigate } from "react-router-dom"



function CompetitionElimination() {
    const navigate = useNavigate();


    return (
        <Grid>
            <Grid> 
                <Button variant="contained" onClick={()=>{navigate("manage-competitions/:id/groups")}}>
                CompetitionElimination
                </Button> 
            </Grid>
            <Grid> 
                <Button  variant="contained" onClick={()=>{navigate("manage-competitions/:id/elimination")}}>
                CompetitionElimination
                </Button> 
            </Grid>
            
        </Grid>
    )
}
  
export default CompetitionElimination