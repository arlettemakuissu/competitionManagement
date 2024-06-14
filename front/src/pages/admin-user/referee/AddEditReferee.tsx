

import {  Button, Grid, TextField } from "@mui/material"
import { saveReferee } from "../../../service/refereeService"
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

function AddEditReferee() {
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");

    const handleSaveReferee = async(e:FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            const data = {email, phoneNumber, firstName,lastName};
            const res = await saveReferee(data);
            if(!res.result){
                navigate("referees");
            }
        }catch(error){
            console.log(error);
        }
    }


    return (
        <Grid>
            <Grid>AddEditReferee </Grid>

            <form onSubmit={handleSaveReferee}>
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
  
export default AddEditReferee