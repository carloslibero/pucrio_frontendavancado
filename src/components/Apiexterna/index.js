import axios from 'axios';

export const getCotacao = async () => {
    try {
        const data = await axios.get('https://br.dolarapi.com/v1/cotacoes');
        return data.data;
    }
    catch (error) {
        console.error("Erro ao obter a cotação:", error);
    }
}