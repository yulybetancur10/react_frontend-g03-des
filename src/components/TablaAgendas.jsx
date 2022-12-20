import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { eliminarAgendasPorId,  listaAgendas } from "../server/server";

function TablaAgendas(){
    const [listAgendas, setAgendas] = useState([]);  //setAgendas contendra lista de agendas obtenida de la response.

    async function cargarAgendas(){
      try{
        const res = await listaAgendas();
        setAgendas(res);
      } catch(error){
        console.log(error);
      }
    }; 
    useEffect(()=>{ //cada vez que se renderiza la pagina AgendaPage o se cambia a esa vista, se activa useEffect
      cargarAgendas();
    },[])

    //console.log(listAgendas)  solo para test
    async function deleteAgendaById(id){
      let result = window.confirm("Seguro desea eliminar?");
      if (result){
        const response= await eliminarAgendasPorId(id);
        alert(response);
        setAgendas(listAgendas.filter(agendas => agendas.id != id));
      }
    }

    let contador=0;

    return (
        <Container>
          <Row>
            <Col><h2>Lista de Agendas</h2></Col>
            <Col xs={6}></Col>
            <Col><Link to="/agenda/form"><Button variant="success">Registrar</Button></Link></Col>
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
                    <td><Button variant="danger" onClick={()=>deleteAgendaById(agendas.id)}>Eliminar</Button></td>
                  </tr>
                ))
              }
            </tbody>
          </Table> 
        </Container>
    )
}export{TablaAgendas}