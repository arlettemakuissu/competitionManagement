
import {  Button, Grid, TextField } from "@mui/material"
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveSupervisor } from "../../../service/supervisorService";

function AddEditSupervisor() {
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");

    const handleSaveSupervisor = async(e:FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            const data = {email, phoneNumber, firstName,lastName};
            const res = await saveSupervisor(data);
            if(res.result){
                navigate("");
            }
        }catch(error){
            console.log(error);
        }
    }


    return (
        <Grid>
            <Grid>AddEditSupervisor </Grid>

            <form onSubmit={handleSaveSupervisor}>
                <TextField onChange={(e)=>{setLastName(e.target.value)}}   placeholder="Lastname"/>
                <TextField onChange={(e)=>{setFirstName(e.target.value)}}   placeholder="Firstname"/>
                <TextField onChange={(e)=>{setPhoneNumber(e.target.value)}}   placeholder="NUMERO TELEPHONE"/>
                <TextField onChange={(e)=>{setEmail(e.target.value)}}  placeholder="EMAIL"/>
                <Button type="reset">CANCEL</Button>
                <Button type="submit">SAVE</Button>
            </form>
            
        </Grid>
    )
}
  
export default AddEditSupervisor