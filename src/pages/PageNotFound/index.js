import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./PageNotFound.module.css";

export default function PageNotFound() {
    return (
        <>
        <Header />
        <section className={styles.pageNotFound}>
            <h1>404 - Página não encontrada</h1>
            <p>Desculpe, a página que você está procurando não existe.</p>
        </section>
        <Footer />
        </>
    );
}