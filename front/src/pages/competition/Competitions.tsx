
import {  Button, Grid } from "@mui/material"
import { Outlet, useNavigate } from "react-router-dom"

function Competitions() {

    const navigate = useNavigate();

    return (
        <Grid>
            <Grid> <Button variant="contained" onClick={()=>{navigate("add-competition")}}>AJOUTER UNE COMPETITION</Button> </Grid>
            
            <Outlet />
        </Grid>
    )
}
  
export default Competitions