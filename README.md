# eXdividado - MVP Sprint FrontEnd - Pós graduação em Full Stack pela PucRio

Produto mínimo viável desenvolvido como trabalho final da Sprint de FrontEnd avançado, da pós de Desenvolvimento FullStack pela PucRio.

A página se trata de um produto para auxiliar no controle das dívidas, permitindo que o usuário tenha uma visão da saúde de suas dívidas e sua capacidade financira para pagar as mesmas.

Foi continuado a problemática inicial, de fornecer uma ferramenta para auxiliar no combate ao endividamento dos Brasileiros, porém foi removido o backend dessa versão, para focar no FrontEnd e no estudo prático do React.

## Requisitos do projeto

Criar um MVP em React ou ferramenta similar, buscando demostrandas as habilidades trabalhadas durante a sprint, com foco em renderização de multiplas páginas, uso de API externa, formulários e tabelas.
Para esse trabalho em específico, foi utilizado o React com o servidor Node.JS e alguns componentes listados nos pré-requisitos.

## Pré Requisitos para executar o projeto

Servidor Node.js
React.JS
Seguintes componentes e versões:
* "@emotion/react": "^11.14.0",
* "@emotion/styled": "^11.14.1",
* "@mui/material": "^7.2.0",
* "@testing-library/dom": "^10.4.0",
* "@testing-library/jest-dom": "^6.6.3",
* "@testing-library/react": "^16.3.0",
* "@testing-library/user-event": "^13.5.0",
* "react": "^19.1.0",
* "react-data-table-component": "^7.7.0",
* "react-dom": "^19.1.0",
* "react-icons": "^5.5.0",
* "react-router-dom": "^7.6.3",
* "react-scripts": "5.0.1",
* "web-vitals": "^2.1.4"

## Como executar
Rodar o seguinte commando no prompt de comando após a instalação dos componentes requeridos.

 `npm start`

Abrir [http://localhost:3000](http://localhost:3000) 

## API Externa

Como estudo de integração com uma API externa, foi utilizado uma API pública que retorna a cotação de algunas moedas, que é disponibilizada no seguinte link: https://br.dolarapi.com/docs/brasil/operations/get-cotacoes.html
As cotações são obtidas através do acesso via Axios ao link https://br.dolarapi.com/v1/cotacoes que retorna um JSON com as informações da moeda, valor de compra e venda e o valor do dia anterior.


## Autor

Carlos Eduardo Libero da Silva - clibero@gmail.com