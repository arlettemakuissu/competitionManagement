/* eslint-disable @typescript-eslint/no-explicit-any */


import {   Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow } from "@mui/material"
import When from "../../../component/atoms/When";
import { useEffect, useState } from "react";
import { RefereeDto } from "../../../dto/referee.dto";
import { getReferees } from "../../../service/refereeService";


function TableReferee() {
    
    const [page, setPage] = useState(0);
    const [referees, setReferees] = useState<RefereeDto[]>([]);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    useEffect(() => {
        getData();
    },[])

    const getData = async () =>{
        const data = await getReferees();
        setReferees(data);
    }

    return (
        <TableContainer component={Paper}>
                <Table  aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{backgroundColor:'#000', color:'#fff'}}>NOM</TableCell>
                            <TableCell sx={{backgroundColor:'#000', color:'#fff'}} align="center">PRENOM</TableCell>
                            <TableCell sx={{backgroundColor:'#000', color:'#fff'}} align="center">EMAIL</TableCell>
                            <TableCell sx={{backgroundColor:'#000', color:'#fff'}} align="center">TELEPHONE</TableCell>
                            <TableCell sx={{backgroundColor:'#000', color:'#fff'}} align="right">AZIONI</TableCell>
                        </TableRow>
                    </TableHead>
                <TableBody>
                    <When condition={referees?.length > 0}>
                    {referees.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => (
                        <TableRow key={JSON.stringify({row})}>
                            <TableCell >{row.firstName}</TableCell>
                            <TableCell align="center">{row.lastName}</TableCell>
                            <TableCell align="center">{row?.email}</TableCell>
                            <TableCell align="center">{row?.phoneNumber}</TableCell>
                            <TableCell align="right">
                                EDEIT DELETE
                            </TableCell>
                        </TableRow>
                    ))}
                    </When>

                    <When condition={referees?.length < 1}> 
                        <TableRow><TableCell colSpan={7} align="center"> <h5>NON CI SONO LAVORI</h5></TableCell></TableRow>
                    </When>
                    
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[10, 15, 20, 25]}
                            colSpan={7}
                            count={referees?.length || 0}
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
  
export default TableReferee
