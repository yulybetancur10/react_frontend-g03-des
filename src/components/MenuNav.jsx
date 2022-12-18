import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function MenuNav(){
    return(
        <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <NavLink className="nav-link" to="/">Inicio</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink className="nav-link" to="/contacto">Contacto</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink className="nav-link" to="/agendas">Agendas</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink eventKey="disabled" disabled>
            Disabled
          </NavLink>
        </Nav.Item>
      </Nav>

    )
}export{MenuNav}