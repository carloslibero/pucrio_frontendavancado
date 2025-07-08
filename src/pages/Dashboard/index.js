import Ad from "../../components/Ad";
import Cotacoes from "../../components/Cotacoes";
import Despesa from "../../components/Despesa";
import Divida from "../../components/Divida";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Initialdataloader from "../../components/Initialdataloader";
import Receita from "../../components/Receita";

export default function Dashboard() {
  return (
    <>
      <Initialdataloader />
      <Header />
      <Ad />
      <Cotacoes />
      <Divida />
      <Receita />
      <Despesa />
      <Footer />
    </>
  );
}