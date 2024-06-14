import { Button, Grid, TextField } from "@mui/material"
import { FormEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { register } from "../../service/userService";

function Register() {
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const handleRegistration = async(e:FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            const data = {
                email,
                firstName,
                lastName,
                phoneNumber,
                address,
                password,
                confirmPassword,
            }
            const res = await register(data);
            if(res.result){
                navigate("/login");
            }
        }catch(error){
            console.log(error);
        }

    }

    return (
    <Grid container justifyContent="center">
        <Grid item md={6}>
            <Grid mb={2}>
                <Link to="/">LOGO TO GO HOME</Link>
            </Grid>
            <Grid container justifyContent="center" my={1}>REGISTER</Grid>
            <form onSubmit={handleRegistration}>
                <TextField onChange={(e)=>{setEmail(e.target.value)}} sx={{ marginBottom: 1}} id="outlined-basic" fullWidth label="Email" variant="outlined" />
                <TextField onChange={(e)=>{setFirstName(e.target.value)}} sx={{ marginBottom: 1}} id="outlined-basic" fullWidth label="First Name" variant="outlined" />
                <TextField onChange={(e)=>{setLastName(e.target.value)}}  sx={{ marginBottom: 1}} id="outlined-basic" fullWidth label="Last Name" variant="outlined" />
                <TextField onChange={(e)=>{setAddress(e.target.value)}}  sx={{ marginBottom: 1}} id="outlined-basic" fullWidth label="Full adress" variant="outlined" />
                <TextField onChange={(e)=>{setPhoneNumber(e.target.value)}}  sx={{ marginBottom: 1}} id="outlined-basic" fullWidth label="Phone number" variant="outlined" />
                <TextField onChange={(e)=>{setPassword(e.target.value)}}  sx={{ marginBottom: 1}} id="outlined-basic" fullWidth label="Password" variant="outlined" />
                <TextField onChange={(e)=>{setConfirmPassword(e.target.value)}}  sx={{ marginBottom: 1}} id="outlined-basic" fullWidth label="Confirm Password" variant="outlined" />
                <Grid container justifyContent="space-between">
                    <Button type="reset" color="error" variant="contained">RESET</Button>
                    <Button type="submit" color="success" variant="contained">REGISTER</Button>
                </Grid>
            </form>
        </Grid>
    </Grid>
    )
  }
  
  export default Register