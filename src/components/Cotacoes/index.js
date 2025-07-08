import styles from "./Cotacoes.module.css";
import {getCotacao} from "../Apiexterna";
import { useEffect, useState } from "react";

export default function Cotacoes() {

    const getDataFromApi = async () => {
        try {
            const response = await getCotacao();
            const newData = response.filter(response => {
                return response.moeda.toLowerCase().includes('usd')
            });
            setApiData(newData);
            const c = newData !== null ? setCompra(newData[0].compra) : [];
            const v = newData !== null ? setVenda(newData[0].venda) : [];

        } catch (error) {
            console.error("Erro ao obter dados da API:", error);
        }
    }

    // Obtém a cotação de algumas moedas
    const [apiData, setApiData] = useState([]);
    const [compra, setCompra] = useState([]);
    const [venda, setVenda] = useState([]);

    useEffect(() => {
        getDataFromApi();
    }, []);

    return (
        <>
            <div className={styles.cotacoes}>
                <h3>Cotação do Dólar hoje. Compra: {compra} Venda: {venda} </h3>
            </div>
        </>
    );
}
