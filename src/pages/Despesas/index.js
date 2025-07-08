import Ad from "../../components/Ad";
import Despesa from "../../components/Despesa";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Initialdataloader from "../../components/Initialdataloader";

export default function Despesas() {
  return (
    <>
      <Initialdataloader />
      <Header />
      <Ad />
      <Despesa />
      <Footer />
    </>
  );
}