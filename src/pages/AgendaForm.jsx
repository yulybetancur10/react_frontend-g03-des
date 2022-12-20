import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { guardarAgenda } from "../server/server";

function AgendaForm(){
    const navigate = useNavigate();
    function returnToAgenda(){
        navigate("/agendas")
    }
    //para crear agenda creamos un hook de estado  con la estructura de la agenda modelo
    const [agenda,setAgenda] = useState(
        {
            fecha:"",
            id_medico:"",
            citas:[]
        }
    )
    //handle escucha los cambios en los componentes. los valores capturados en la vista los envia a los atributos del modelo
    function handleChange({target}){
        setAgenda({
            ...agenda,
            [target.name]:target.value
        })
        console.log(agenda);
    }

    async function handleSubmit(e) {        
        e.preventDefault();        
        const resp = await guardarAgenda(agenda);
        alert("se creo la agenda: "+ resp.id);
        returnToAgenda(); 
    };


    return(
        <Container>
        <h2>Registrar Agenda</h2>
        <Form className="my-3" onSubmit={handleSubmit}>
            <Row>
                <Col xs="auto" className="my-1">
                    <Form.Label>Fecha:</Form.Label>
                    <Form.Control required
                        placeholder="aaaa-mm-dd"
                        name="fecha"
                        onChange={handleChange}/>
                </Col>
                <Col xs="auto" className="my-1">
                    <Form.Label>Medico:</Form.Label>
                        <Form.Select required
                            name="id_medico"
                            onChange={handleChange}>
                            <option></option>
                            <option value="6393f2033faff51b052142a2">Carmen</option>
                            <option></option>
                        </Form.Select>
                </Col>  
            </Row>
            <Row>
                <Col>
                    <Button variant="success" type="submit">Guardar</Button>
                </Col>
                <Col>
                    <Button onClick={returnToAgenda}>Regresar</Button>
                </Col>
            </Row>
        </Form>
        </Container>
    )
}export{AgendaForm}