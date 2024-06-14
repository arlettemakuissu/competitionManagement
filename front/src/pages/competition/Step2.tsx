
import {  FormControl, FormHelperText, Grid, MenuItem } from "@mui/material"

import Select, { SelectChangeEvent } from '@mui/material/Select';
import { CreateEditCompetitionDto } from "../../dto/competition.dto";

interface StepProps {
    setCompetition: (d: CreateEditCompetitionDto)=>void;
    competition: CreateEditCompetitionDto;
}
function Step2({ setCompetition, competition }:StepProps) {
   
    const handleChangeNbQualified = (e:SelectChangeEvent) => {
        competition.nbQualified = Number(e?.target?.value);
        setCompetition({...competition});
    }
    const handleChangeNbTeam = (e:SelectChangeEvent) => {
        competition.nbTeam = Number(e?.target?.value);
        setCompetition({...competition});
    }
    const handleChangeNbGroup = (e:SelectChangeEvent) => {
        competition.nbGroupe = Number(e?.target?.value);
        setCompetition({...competition});
    }

    return (
        <Grid>
            <Grid textAlign="center">PARAMETRER LE TOURNOIS </Grid>

                <FormControl fullWidth>
                    <FormHelperText>NOMBRE DE EQUIPE </FormHelperText>
                    <Select
                        value={""+competition.nbTeam}
                        onChange={handleChangeNbTeam}
                    >
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth>
                    <FormHelperText>NOMBRE DE POULE (GROUPE)</FormHelperText>
                    <Select
                        value={""+competition.nbGroupe}
                        label="Nombre de poule"
                        onChange={handleChangeNbGroup}
                    >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth>
                    <FormHelperText>NOMBRE  EQUIPE QUALIFIE POUR LES ELIMINATOIRES DIRECT</FormHelperText>
                    <Select
                        value={""+competition.nbQualified}
                        onChange={handleChangeNbQualified}
                    >
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={16}>16</MenuItem>
                        <MenuItem value={32}>32</MenuItem>
                    </Select>
                </FormControl>
        </Grid>
    )
}
  
export default Step2
