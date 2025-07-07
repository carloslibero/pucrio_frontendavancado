import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <Link to="/">
                <span>eXdividado</span>
            </Link>
            <nav>
                <Link to="/">Dashboard</Link>
                <Link to="/dividas">Dividas</Link>
                <Link to="/receitas">Receitas</Link>
                <Link to="/despesas">Despesas</Link>
            </nav>
        </header>
    )
}
