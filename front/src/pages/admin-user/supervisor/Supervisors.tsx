

import {  Button, Grid } from "@mui/material"
import { Outlet, useNavigate } from "react-router-dom"

function Supervisors() {
    const navigate = useNavigate();
    return (
        
        <Grid>
            <Grid> <Button variant="contained" onClick={()=>{navigate("add")}}>AJOUTER UN SUPERVISEUR</Button> </Grid>
            <Outlet />
        </Grid>
    )
}
  
export default Supervisors