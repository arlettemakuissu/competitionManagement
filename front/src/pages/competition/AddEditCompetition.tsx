


import {  Button, Grid } from "@mui/material"
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveCompetition } from "../../service/competitionService";
import When from "../../component/atoms/When";
import Step1 from "./Step1";
import Step2 from "./Step2";
import { CreateEditCompetitionDto } from "../../dto/competition.dto";

function AddEditCompetition() {
    const navigate = useNavigate();
    const [step, setStep] = useState<number>(1);
    const [competition, setCompetition] = useState<CreateEditCompetitionDto>({
        address:"", name:"", dateEnd: "", dateStart:"", nbGroupe: 1, nbQualified: 2, nbTeam: 4 
    });
    //const [isValid, setValid] = useState<boolean>(false);
   
  
    const handleSaveCompetition = async (e:FormEvent<HTMLFormElement>) => {
        try{
            e.preventDefault();
            const res = await saveCompetition(competition);
            console.log(res);
            if(res.result){
                navigate("");
            }
        }catch(e){
            console.log(e);
        }
    }
    
    return (
        <Grid>
            <form onSubmit={handleSaveCompetition}>
                <Grid container justifyContent="center">
                    <Grid item md={6}>
                        <Grid container  sx={{ my: 2 }} justifyContent="space-between">
                            <Button onClick={()=>{ setStep(1)}} disabled={step === 1} color="success" variant="contained">PRECEDENT</Button>
                            <Button onClick={()=>{ setStep(2)}} disabled={step === 2} color="success" variant="contained">SUIVANT</Button>
                        </Grid>
                        <When condition={step === 1}>
                            <Step1 competition={competition} setCompetition={setCompetition}/>
                        </When>
                        <When condition={step === 2}>
                            <Step2 competition={competition} setCompetition={setCompetition}/>
                        </When>
                        <Grid container  sx={{ mt: 2 }} justifyContent="center">
                            <Button type="submit" color="success" variant="contained">CREER LA COMPETITION</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </Grid>
    )
}
  
export default AddEditCompetition