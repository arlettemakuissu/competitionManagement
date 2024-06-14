import { Grid } from "@mui/material"
import { Link } from "react-router-dom"


const listMath = [
    {
        label: "demi final",
        matchs:[
            {
                receiver: "Barca",
                goalReceiver: 2,
                goalReceived: "Real",
                received: 1,
                isReceivedWin: false,
                isReceiverWin: true
            },
            {
                receiver: "Barca",
                goalReceiver: 2,
                goalReceived: "Real",
                received: 1,
                isReceivedWin: false,
                isReceiverWin: true
            },
            {
                receiver: "Barca",
                goalReceiver: 2,
                goalReceived: "Real",
                received: 1,
                isReceivedWin: false,
                isReceiverWin: true
            },
        ]
    },
    {
        label: "quart de final",
        matchs:[
            {
                receiver: "Barca",
                goalReceiver: 2,
                goalReceived: "Real",
                received: 1,
                isReceivedWin: false,
                isReceiverWin: true
            },
            {
                receiver: "Barca",
                goalReceiver: 2,
                goalReceived: "Real",
                received: 1,
                isReceivedWin: false,
                isReceiverWin: true
            },
            {
                receiver: "Barca",
                goalReceiver: 2,
                goalReceived: "Real",
                received: 1,
                isReceivedWin: false,
                isReceiverWin: true,
            },
        ]
    },
]

function Home() {

   

    return (
      <Grid>
        <Grid border={2}  my={2} p={4} color="black">
        Header
        </Grid>
        {
            listMath.map(group=>(
                <Grid> 
                    <Grid bgcolor="gray" paddingY={1}>
                        Competition level {group.label}
                    </Grid>
                    <Grid>
                         {group.matchs.map(match => (
                            <Grid textAlign="center">
                                {match.receiver} {match.goalReceiver} -  {match.received} {match.goalReceived}
                            </Grid>
                         ))}
                    </Grid>
                </Grid>
            ))
        }
        
        <Grid border={2} mt={2} p={4} color="black" container justifyContent="space-between">
            <Link to="/register">REGISTER</Link>
            <Link to="/login">LOGIN</Link>
        </Grid>
      </Grid>
    )
  }
  
  export default Home