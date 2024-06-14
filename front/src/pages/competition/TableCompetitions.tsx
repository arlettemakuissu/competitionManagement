

/* eslint-disable @typescript-eslint/no-explicit-any */

import {   Button, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow } from "@mui/material"

import { useEffect, useState } from "react";
import { CompetitionDto } from "../../dto/competition.dto";
import When from "../../component/atoms/When";
import { getCompetitions } from "../../service/competitionService";
import { useNavigate } from "react-router-dom";

function TableCompetitions() {
    const nagivate = useNavigate();
    const [page, setPage] = useState(0);
    const [competitions, setCompetitions] = useState<CompetitionDto[]>([]);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    useEffect(() => {
        getData();
    },[])

    const getData = async () =>{
        const data = await getCompetitions();
        setCompetitions(data);
    }

    const goToManage = (id:number| undefined) => async() => {
        if(id === undefined){
            return;
        }
        nagivate(`manage-competitions/${id}`)
    }

    return (
        <TableContainer component={Paper}>
                <Table  aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{backgroundColor:'#000', color:'#fff'}}>LOGO</TableCell><TableCell sx={{backgroundColor:'#000', color:'#fff'}} align="center">PRENOM</TableCell>
                            <TableCell sx={{backgroundColor:'#000', color:'#fff'}} align="center">NOM COMPETITION</TableCell>
                            <TableCell sx={{backgroundColor:'#000', color:'#fff'}} align="center">ADRESSE</TableCell>
                            <TableCell sx={{backgroundColor:'#000', color:'#fff'}} align="center">DATE DEBUT</TableCell>
                            <TableCell sx={{backgroundColor:'#000', color:'#fff'}} align="right">AZIONI</TableCell>
                        </TableRow>
                    </TableHead>
                <TableBody>
                    <When condition={competitions?.length > 0}>
                    {competitions.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => (
                        <TableRow key={JSON.stringify({row})}>
                            <TableCell >{row.name}</TableCell>
                            <TableCell align="center">{row.name}</TableCell>
                            <TableCell align="center">{row.address}</TableCell>
                            <TableCell align="center">{row.dateStart}</TableCell>
                            <TableCell align="center">{row.dateEnd}</TableCell>
                            <TableCell align="right">
                                <Button onClick={goToManage(row.id)}>MANAGE</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                    </When>

                    <When condition={competitions?.length < 1}> 
                        <TableRow><TableCell colSpan={7} align="center"> <h5>NON CI SONO COMPETITION</h5></TableCell></TableRow>
                    </When>
                    
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[10, 15, 20, 25]}
                            colSpan={7}
                            count={competitions?.length || 0}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            slotProps={{
                                select: {
                                inputProps: {'aria-label': 'rows per page',},
                                native: true,
                                },
                            }}
                            onPageChange={(event: any, newPage: number) => {setPage(newPage);}}
                            onRowsPerPageChange={(e:any)=>{setRowsPerPage(Number(e.target.value));}}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    )
}
  
export default TableCompetitions
