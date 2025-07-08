import Ad from "../../components/Ad";
import Divida from "../../components/Divida";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Initialdataloader from "../../components/Initialdataloader";

export default function Dividas() {
  return (
    <>
      <Initialdataloader />
      <Header />
      <Ad />
      <Divida />
      <Footer />
    </>
  );
}