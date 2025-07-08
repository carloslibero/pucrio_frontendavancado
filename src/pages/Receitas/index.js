import Ad from "../../components/Ad";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Initialdataloader from "../../components/Initialdataloader";
import Receitatable from "../../components/Receitatable";

export default function Receitas() {
  return (
    <>
      <Initialdataloader />
      <Header />
      <Ad />
      <Receitatable />
      <Footer />
    </>
  );
}