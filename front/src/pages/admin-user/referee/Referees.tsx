

import {  Button, Grid } from "@mui/material"
import { Outlet, useNavigate } from "react-router-dom"

function Referees() {
    const navigate = useNavigate();

    return (
        <Grid>
            <Grid> <Button variant="contained" onClick={()=>{navigate("add")}}>AJOUTER UN ARBITRE</Button> </Grid>
            <Outlet />
        </Grid>
    )
}
  
export default Referees