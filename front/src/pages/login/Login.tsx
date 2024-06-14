import { Button, Grid, TextField } from "@mui/material"
import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { login } from "../../service/userService";

function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");


    const handleLogin = async(e:FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            const data = {
                email, password
            };
            const res =  await login(data);
            if(res.token){
                navigate("/dashboad");
            }
        }catch(error){
            console.log(error);
        }
    }

    return (
       
    <Grid container justifyContent="center">
        <Grid item md={4}>
            <Grid mb={2}>
               <Link to="/">LOGO TO GO HOME</Link>
            </Grid>
            <Grid container justifyContent="center"   my={1}>LOGIN</Grid>
            <form onSubmit={handleLogin}>
                <TextField onChange={(e)=>{setEmail(e.target.value)}} sx={{ marginBottom: 1}} id="outlined-basic" fullWidth label="Email" variant="outlined" />
                <TextField onChange={(e)=>{setPassword(e.target.value)}} sx={{ marginBottom: 1}} id="outlined-basic" fullWidth label="Password" variant="outlined" />
                <Grid container justifyContent="center"  my={2}>
                    <Button type="submit" color="success"  variant="contained"> LOGIN</Button>
                </Grid>
                <Grid container justifyContent="center" mb={2}>
                    <Link to="/register">FORGET PASSWORD</Link>
                </Grid>
                <Grid container justifyContent="center">
                    <Link to="/register">REGISTER</Link>
                </Grid>
            </form>
        </Grid>
    </Grid>
    )
  }
  
  export default Login