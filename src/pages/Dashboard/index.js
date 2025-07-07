import Ad from "../../components/Ad";
import Despesa from "../../components/Despesa";
import Divida from "../../components/Divida";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Receita from "../../components/Receita";

export default function Dashboard() {
  return (
    <>
      <Header />
      <Ad />
      <Divida />
      <Receita />
      <Despesa />
      <Footer />
    </>
  );
}