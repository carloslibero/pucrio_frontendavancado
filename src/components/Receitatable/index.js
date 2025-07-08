import styles from './Receitatable.module.css';
import { useEffect, useState } from "react"

//Importando o DataTable do react-data-table-component para uso com edições e outros recursos
// Disponível em https://www.npmjs.com/package/react-data-table-component
import DataTable from 'react-data-table-component';

// Importa o ícone de deletar
import { FaTrash } from 'react-icons/fa'; 

export default function Receitatable() {
    const columnsReceita = [
        {
            name: "ID",
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
            selector: row => row.date,
            sortable: true
        },
        {
            name: "Frequência",
            selector: row => row.period,
            sortable: true
        },
        {
            name: "Ações",
            selector: row => row.actions,
        }
    ];

     //Lendo os valores para exibir na tabela
    const [receitasList, setReceitasList] = useState([]);
    const [originalData, setOriginalData] = useState([]);

    //Função para carregar os dados iniciais das Receitas
    const getDataFromStorage = () => {
        try {
            //Verifica as Receitas
            const receitaData = localStorage.getItem('receitaData');
            const z = receitaData !== null ? JSON.parse(receitaData) : [];
            setReceitasList(z);
            setOriginalData(z);
        } 
        catch(error)
        {
            console.error("Erro ao obter dados do localStorage:", error);
        }
    }

useEffect(() => {
    getDataFromStorage();
}, []);

//função para adicionar o botão de deletar na tabela
function addDeleteButton(receitasList) {
    return (
        <button type='button' onClick={() => {handleDelete(receitasList.id)}}>
            <FaTrash />
        </button>
     );
}

receitasList.forEach(element => {
    element.actions = addDeleteButton(element);
});

//função para deletar uma receita
function handleDelete(id) {
    const newRows = receitasList.filter(receitasList => receitasList.id !== id);
    setReceitasList(newRows);
    setOriginalData(newRows);

    const rowsReceita = newRows.map((w) => ({
        id: w.id,
        desc: w.desc,
        amount: w.amount,
        date: w.date,
        period: w.period,
    }));

    try {
        localStorage.setItem("receitaData",JSON.stringify(rowsReceita));
    }
    catch (error) {
        console.error("Erro ao atualizar as Receitas: ", error);
    }
}

//função para salvar uma nova receita
function onSave(event) {
    event.preventDefault();
    let newID = receitasList.length + 1; // Incrementa o ID baseado no tamanho atual do array
    let newReceitas = {
        id: newID,
        desc: event.target.newdescription.value,
        amount: parseFloat(event.target.newamount.value),   
        date: new Date(event.target.newstartdate.value).toLocaleDateString('pt-BR'),
        period: event.target.newperiodic.value,
    }
    setReceitasList([...receitasList,newReceitas]);
    setOriginalData([...originalData,newReceitas]);

    //Limpa os valores
    event.target.newdescription.value = "";
    event.target.newamount.value = "";
    event.target.newstartdate.value = "";
    event.target.newperiodic.value = "";

    const rowsReceita = originalData.map((w) => ({
        id: w.id,
        desc: w.desc,
        amount: w.amount,
        date: w.date,
        period: w.period,
    }));

    try {
        localStorage.setItem("receitaData",JSON.stringify(rowsReceita));
    }
    catch (error) {
        console.error("Erro ao atualizar as Receitas: ", error);
    }
}

    //Função para filtar os dados na tabela Receita
    function handleFilter(event) {
        console.log("Original Data", originalData);
        const filterData = receitasList.filter(row => {
            return row.desc.toLowerCase().includes(event.target.value.toLowerCase())
        });
        setOriginalData((filterData));
    }

    return (
        <div className={styles.receitaTable}>
            <form onSubmit={onSave}>
                <label>Descrição: 
                    <span title="Informe a descrição da Receita">
                        <input type="text" name="newdescription" placeholder="Descrição da receita" required="Favor informar a descrição" />
                    </span>
                </label>
                <label>Valor: 
                    <span title="Informe o valor da receita">
                        <input type="number" name="newamount" min="0.00" max="10000.00" step="0.01" placeholder="Valor da receita" required="Favor informar o valor" />
                    </span>
                </label>
                <label>Data de Início: 
                    <span title="Informe a data da Receita">
                        <input type="date" name="newstartdate" required="Data da Receita deve ser informada" />
                    </span>
                </label>
                <label>Frequência: 
                    <span title="Informe a frequência da Receita">
                        <input type="text" name="newperiodic" placeholder="Mensal" />
                    </span>
                </label>
                <span title="Adiccionar uma nova receita">
                    <button type="submit">Adicionar Receita</button>
                </span>
            </form>
            <div className={styles.buscar}>
                <label>Buscar:
                    <input type="text" id="buscar" placeholder="Descrição" onChange={handleFilter} />
                </label>
            </div>
            <DataTable
                title="Receitas"
                columns={columnsReceita}
                data={originalData}
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