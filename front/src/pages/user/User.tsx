
import {  Grid } from "@mui/material"
import { useNavigate } from "react-router-dom";
import When from "../../component/atoms/When";
import AdminUser from "../admin-user/AdminUser";
//import ItUser from "../it-user/ItUser";
//import SupervisorUser from "../supervisor-user/SupervisorUser";

function User() {

    const navigate = useNavigate();
    const isLog = true;
    const role = 'ADMIN';

    if(!isLog){
        navigate('/login');
    }

    return (
        <Grid>
            <When condition={role==="ADMIN"}>
                <AdminUser />
            </When>
            {/**
            <When condition={role==="IT"}>
                <ItUser />
            </When>
            <When condition={role==="SUPERVISOR"}>
                <SupervisorUser />
            </When>
             */}
        </Grid>
    )
  }
  
  export default User