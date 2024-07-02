


import { Button, Grid } from "@mui/material"
import { useNavigate } from "react-router-dom"



function CompetitionGroup() {
    const navigate = useNavigate();


    return (
        <Grid>
            <Grid> 
                <Button variant="contained" onClick={()=>{navigate("manage-competitions/:id/groups")}}>
                CompetitionGroup
                </Button> 
            </Grid>
            <Grid> 
                <Button  variant="contained" onClick={()=>{navigate("manage-competitions/:id/elimination")}}>
                CompetitionGroup
                </Button> 
            </Grid>
            
        </Grid>
    )
}
  
export default CompetitionGroup