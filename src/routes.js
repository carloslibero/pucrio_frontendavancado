import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dividas from "./pages/Dividas";
import Receitas from "./pages/Receitas";
import Despesas from "./pages/Despesas";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Dashboard />} />
                <Route path="/dividas" element={ <Dividas />} />
                <Route path="/receitas" element={ <Receitas />} />
                <Route path="/despesas" element={ <Despesas />} />
                <Route path="*" element={ <PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}