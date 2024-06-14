
import {  Grid } from "@mui/material"
import { Link, Outlet } from "react-router-dom"

function AdminUser() {


    return (
        <Grid>
             <Grid container justifyContent="space-between">
                <Link to="">COMPETITIONS</Link>
                <Link to="supervisors">SUPERVISORS</Link>
                <Link to="referees">ARBITRES</Link>
                <Link to="/">LOGOUT</Link>
            </Grid>
            <Outlet />
        </Grid>
    )
  }
  
  export default AdminUser