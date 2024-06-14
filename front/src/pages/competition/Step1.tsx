/* eslint-disable @typescript-eslint/no-explicit-any */

import {  Grid, TextField } from "@mui/material"
import { DatePicker } from '@mui/x-date-pickers/DatePicker'; 
import dayjs, { Dayjs } from 'dayjs';
import { CreateEditCompetitionDto } from "../../dto/competition.dto";

interface StepProps {
    setCompetition: (d: CreateEditCompetitionDto)=>void;
    competition: CreateEditCompetitionDto;
}

function Step1({ setCompetition , competition}:StepProps) {
    
    const onChangeDateStart = (data?:(Dayjs | null  | undefined)) => { 
        competition.dateStart = data?.format("YYYY-MM-DD") || "";
        setCompetition({...competition})
    }
    const onChangeDateEnd = (data?:(Dayjs | null  | undefined)) => {
        competition.dateEnd = data?.format("YYYY-MM-DD") || "";
        setCompetition({...competition})
    }
    const onChangeName = (e:any) => { 
        competition.name = e.target.value;
        setCompetition({...competition})
    }
    const onChangeAddress = (e:any) => {
        competition.address = e.target.value;
        setCompetition({...competition})
    }


    return (
        <Grid>
            <Grid textAlign="center" >REMPLIR CES INFO POUR CREER UNE COMPETITION </Grid>
                <TextField sx={{ mt: 2 }} onChange={onChangeName}   placeholder="NOM" fullWidth/>
                <TextField sx={{ mt: 2 }} onChange={onChangeAddress}   placeholder="ADDRESS" fullWidth/>
                <Grid container spacing={2} sx={{ mt: 2 }} justifyContent="center">
                    <Grid item  xs={6} >
                        {/** before use this here check the app.tsx */}
                        <DatePicker
                            value={dayjs(competition.dateStart)}
                            sx={{width: '100%'}} 
                            onChange={onChangeDateStart} label="Date debut"  
                        />
                    </Grid>
                    <Grid item  xs={6} >
                        <DatePicker sx={{width: '100%'}} value={dayjs(competition.dateEnd)} onChange={onChangeDateEnd} label="Date fin" />
                    </Grid>
                </Grid>
        </Grid>
    )
}
  
export default Step1
