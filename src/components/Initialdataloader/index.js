import styles from "./Initialdataloader.module.css"
import { useState } from "react"

//Importando os Jsons para carregamennto nas devidas tabelas
// Data import - usando o json com os dados para exibir na tabela
import receitas from '../../receitas.json';
import despesas from '../../despesas.json';
import dividas from '../../dividas.json';
import { data } from "react-router-dom";

export default function Initialdataloader() {

//Criando os user states para armazenar os dados das tabelas
const [receitasList, setReceitasList] = useState(receitas.receitas);
const [despesasList, setDespesasList] = useState(despesas.despesas);
const [dividasList, setDividasList] = useState(dividas.dividas);

//Função para carregar os dados iniciais das Receitas
const loadInitialDataReceitas = () => {
    //Lendo os valores para exibir na tabela
    const rowsReceita = receitasList.map((receitas) => ({
        id: receitas.id,
        desc: receitas.description,
        amount: receitas.amount,
        date: receitas.startdate,
        period: receitas.periodic,
    }));

    //Salva os dados no localStorage
    try {
        localStorage.setItem('receitaData', JSON.stringify(rowsReceita));
        console.log("Dados salvos no localStorage com sucesso!");
    }
    catch (error) {
        console.error("Erro ao salvar dados no localStorage:", error);
    }
}

//Função para carregar os dados iniciais das Despesas
const loadInitialDataDespesas = () => {
    //Lendo os valores para exibir na tabela
    const rowsDespesa = despesasList.map((despesas) => ({
        desc: despesas.description,
        amount: despesas.amount,
        date: despesas.startdate,
        period: despesas.periodic,
    }));

    //Salva os dados no localStorage
    try {
        localStorage.setItem('despesaData', JSON.stringify(rowsDespesa));
        console.log("Dados salvos no localStorage com sucesso!");
    }
    catch (error) {
        console.error("Erro ao salvar dados no localStorage:", error);
    }
}

//Função para carregar os dados iniciais das Dívidas
const loadInitialDataDividas = () => {
    //Lendo os valores para exibir na tabela
    const rowsDivida = dividasList.map((dividas) => ({
        desc: dividas.description,
        cat: dividas.category,
        amountini: dividas.initialamount,
        amounntend: dividas.finalamount,
        dateini: dividas.startdate,
        dateend: dividas.enddate,
        done: dividas.completed ? 'Sim' : 'Não',
    }));

    //Salva os dados no localStorage
    try {
        localStorage.setItem('dividaData', JSON.stringify(rowsDivida));
        console.log("Dados salvos no localStorage com sucesso!");
    }
    catch (error) {
        console.error("Erro ao salvar dados no localStorage:", error);
    }
}

//Verificando se os dados já foram carregados e chama a função de carga inicial caso contrário
const getDataFromStorage = () => {
    try {
        //Verifica as Receitas
        const receitaData = localStorage.getItem('receitaData');
        console.log("Dados das Receitas obtidos do localStorage:", receitaData);
        const d = receitaData !== null ? JSON.parse(receitaData) : [loadInitialDataReceitas()];

        //Verifica as Despesas
        const despesaData = localStorage.getItem('despesaData');
        console.log("Dados das Despesas obtidos do localStorage:", despesaData);
        const e = despesaData !== null ? JSON.parse(despesaData) : [loadInitialDataDespesas()];

        //Verifica as Dividas
        const dividaData = localStorage.getItem('dividaData');
        console.log("Dados das Dividas obtidos do localStorage:", dividaData);
        const f = dividaData !== null ? JSON.parse(dividaData) : [loadInitialDataDividas()];
    } 
    catch(error)
    {
        console.error("Erro ao obter dados do localStorage:", error);
    }
}

    return (
        getDataFromStorage(),
        <div className={styles.initialdataloader}>

        </div>
    );
}
