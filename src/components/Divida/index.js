import styles from './Divida.module.css';

// MUI imports for the Table component
import * as React from 'react';
import { createContext, useEffect, useState } from "react"
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

//Setagem dos parametros da tabela conforme exemplo do Material UI component https://mui.com/material-ui/react-table/
const columns = [
  { id: 'desc', label: 'Descrição', minWidth: 100, align: 'left' },
  { id: 'cat', label: 'Categoria', minWidth: 100, align: 'left' },
  { id: 'amountini', label: 'Valor Original', minWidth: 50, align: 'center', format: (value) => value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) },
  { id: 'amountend', label: 'Valor Total', minWidth: 50, align: 'center', format: (value) => value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) },
  { id: 'dateini', label: 'Início', minWidth: 50, align: 'center', format: (value) => new Date(value).toLocaleDateString('pt-BR') },
  { id: 'dateend', label: 'Fim', minWidth: 50, align: 'center', format: (value) => new Date(value).toLocaleDateString('pt-BR') },
  { id: 'done', label: 'Paga?', minWidth: 50, align: 'center'  },
];

export default function Divida() {
    //Definindo os parametros da tabela
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

//Lendo os valores para exibir na tabela
const [dividaList, setDividaList] = useState([]);

//Função para carregar os dados iniciais das Dividas
const getDataFromStorage = () => {
    try {
        //Verifica as Dividas
        const dividaData = localStorage.getItem('dividaData');
        const z = dividaData !== null ? JSON.parse(dividaData) : [];
        setDividaList(z);
    } 
    catch(error)
    {
        console.error("Erro ao obter dados do localStorage:", error);
    }
}

useEffect(() => {
    getDataFromStorage();
}, []);

    return (
       <div className={styles.dividas}>
        <h2>Dividas</h2>
        <Paper>
        <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="Receitas">
            <TableHead>
                <TableRow>
                {columns.map((column) => (
                    <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                    >
                    {column.label}
                    </TableCell>
                ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {dividaList
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                    return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                        {columns.map((column) => {
                        const value = row[column.id];
                        return (
                            <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                                ? column.format(value)
                                : value}
                            </TableCell>
                        );
                        })}
                    </TableRow>
                    );
                })}
            </TableBody>
            </Table>
        </TableContainer>
        <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={dividaList.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
        </Paper>
   </div>
  );
}
