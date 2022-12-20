import { HashRouter, Route, Routes } from "react-router-dom"
import { MenuNav } from "../components/MenuNav"
import { AgendaDetalle } from "../pages/agendaDetalle"
import { AgendaForm } from "../pages/AgendaForm"
import { AgendaPage } from "../pages/agendaPage"
import { ContactPage } from "../pages/ContactPage"
import { HomePage } from "../pages/HomePage"
import { NotFound } from "../pages/NotFound"



function App() {

  return (
    <div>
      <HashRouter>
        <MenuNav/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/contacto" element={<ContactPage/>}/>
          <Route path="/agendas" element={<AgendaPage/>}/>
          <Route path="/agendas/:id" element={<AgendaDetalle/>}/>
          <Route path="/agenda/form" element={<AgendaForm/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </HashRouter>
    </div>
  )
}export default App
