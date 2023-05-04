import { Outlet } from "react-router-dom";
import {Footer} from './components/Footer/Footer'
import { Sobre } from './pages/Sobre/Sobre'
import { Home } from './pages/Home/Home'
import { Relatos } from './pages/Relatos/Relatos'
import { Informacoes } from './pages/Informacoes/Informacoes'
import { Navbar } from './components/Navbar/Navbar'

export function Root() {
    return (
        <>
            <Navbar />
            <main>
                <Home />
                <Sobre />
                <Relatos />
                <Informacoes />
                <Footer />
                <Outlet />
            </main>
        </>
    )
}