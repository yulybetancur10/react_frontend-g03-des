import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function TablaAgendas(){
    const [listAgendas, setAgendas] = useState([]);

    async function cargarAgendas(){
      const options = {method: 'GET'};
      fetch('http://localhost:8080/agendas', options)
        .then(response => response.json())
        .then(response => setAgendas(response)) //setAgendas contendra lista de agendas obtenida de la response.
        .catch(err => console.error(err));
    };
    useEffect(()=>{ //cada vez que se renderiza la pagina AgendaPage o se cambia a esa vista, se activa useEffect
      cargarAgendas();
    },[])

    //console.log(listAgendas)  solo para test

    let contador=0;

    return (
        <Container>
          <Row>
            <Col><h2>Lista de Agendas</h2></Col>
          </Row>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Id Agenda</th>
                <th>Fecha</th>
                <th>Id Medico</th>
                <th>Ver Detalle</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {
                listAgendas.map((agendas)=>(
                  <tr key={agendas.id}>
                    <td>{++contador}</td>
                    <td>{agendas.id}</td>
                    <td>{agendas.fecha}</td>
                    <td>{agendas.id_medico}</td>
                    <td><Link>Ver Detalle</Link></td>
                    <td><Button variant="danger">Eliminar</Button></td>
                  </tr>
                ))
              }
            </tbody>
          </Table> 
        </Container>
    )
}export{TablaAgendas}