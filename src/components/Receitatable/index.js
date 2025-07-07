import styles from './Receitatable.module.css';
import { act, createContext, useEffect, useState } from "react"

//Importando o DataTable do react-data-table-component para uso com edições e outros recursos
// Disponível em https://www.npmjs.com/package/react-data-table-component
import DataTable from 'react-data-table-component';

// Data import - usando o json com os dados para exibir na tabela
import receitas from '../../receitas.json';
import { FaTrash } from 'react-icons/fa'; 
import { selectClasses } from '@mui/material';

export default function Receitatable() {
    const columnsReceita = [
        {
            name: 'ID',
            selector: row => row.id,
            sortable: true
        },
        {
            name: "Descrição",
            selector: row => row.desc,
            sortable: true
        },
        {
            name: "Valor",
            selector: row => row.amount,
            sortable: true
        },
        {
            name: "Data de Início",
            selector: row => row.startdate,
            sortable: true
        },
        {
            name: "Frequência",
            selector: row => row.periodic,
            sortable: true
        },
        {
            name: "Ações",
            selector: row => row.actions,
        }
    ];
    
    const [receitasList, setReceitasList] = useState(receitas.receitas);

    //Lendo os valores para exibir na tabela
    const rows = receitasList.map((receitas) => ({
        id: receitas.id,
        desc: receitas.description,
        amount: receitas.amount,
        startdate: receitas.startdate,
        periodic: receitas.periodic,
    }));

//função para adicionar o botão de deletar na tabela
function addDeleteButton(rows) {
    return (
        <button type='button' onClick={() => {handleDelete(rows.id)}}>
            <FaTrash />
        </button>
     );
}

rows.forEach(element => {
    element.actions = addDeleteButton(element);
    const newRows = [...rows];
    console.log(newRows);
});

//função para deletar uma receita
function handleDelete(id) {
    const newRows = rows.filter(rows => rows.id !== id);
    console.log("Deletando receita com ID:", id);
    setReceitasList(newRows);
    //let updatedRows = rows.filter(row => row.id !== id);
    console.log("Receitas após deleção:", rows);
}

//função para salvar uma nova receita
function onSave(event) {
    event.preventDefault();
    let newID = rows.length + 1; // Incrementa o ID baseado no tamanho atual do array
    console.log(event.target.newdescription.value);
    let newReceitas = {
        id: newID,
        desc: event.target.newdescription.value,
        amount: parseFloat(event.target.newamount.value),   
        startdate: event.target.newstartdate.value,
        periodic: event.target.newperiodic.value,
    }
    console.log("Adicionando nova receita:", newReceitas);
    console.log(rows);
    setReceitasList([...receitasList,newReceitas]);
    console.log(rows);
}

    return (
        <div className={styles.receitaTable}>
            <form onSubmit={onSave}>
                <label>Descrição: </label>
                <input type="text" name="newdescription" placeholder="Descrição da receita" required="" />
                <label>Valor: </label>
                <input type="number" name="newamount" min="0.00" max="10000.00" step="0.01" placeholder="Valor da receita" required="" />
                <label>Data de Início: </label>
                <input type="date" name="newstartdate" required="Data da Receita" />
                <label>Frequência: </label>
                <input type="text" name="newperiodic" required="" />
                <button type="submit">Adicionar Receita</button>
            </form>
            <DataTable
                title="Receitas"
                columns={columnsReceita}
                data={rows}
                fixedHeader
                pagination
                highlightOnHover
                striped
                pointerOnHover
                persistTableHead
                selectableRowsHighlight
            >
            </DataTable>
        </div>
    );
}