import { useState } from "react";
import { Container, Table, Button, Form, Row, Col } from "react-bootstrap";

export default function DetalhesCandidato(props) {
    const [pergunta, setPergunta] = useState("");
    const [questionamentos, setQuestionamentos] = useState(props.candidatoSelecionado.questionamentos)
    function muda(e) {
        setPergunta(e.target.value);
    }
    function handleSubmit(evento) {
        evento.preventDefault();
        evento.stopPropagation();
        props.candidatoSelecionado.questionamentos = [...props.candidatoSelecionado.questionamentos, pergunta]
        setQuestionamentos([...questionamentos, pergunta])
        setPergunta("");
    }
    return (
        <Container>
            <h1>Detalhes Candidato</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Avatar</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <th>{props.candidatoSelecionado.id}</th>
                        <th>{props.candidatoSelecionado.nome}</th>
                        <th>{props.candidatoSelecionado.email}</th>
                        <th><img src={props.candidatoSelecionado.avatar} alt="Foto Candidato" style={{ width: "100px", height: "100px" }} /></th>
                    </tr>
                </tbody>
            </Table>

            <Container>
            <Container className="m-5 p-5 ms-0 ps-2">
                <h1>Propostas:</h1>
                {props.candidatoSelecionado.propostas.map((proposta)=>{
                    return(
                        <h2>{proposta}</h2>
                    )
                })}
            </Container>

            <Form onSubmit={handleSubmit} className="mt-5 mb-5 p-5" style={{backgroundColor:"gray",borderRadius:"5rem"}}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>Deixe aqui o seu questionamento</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Qual sua proposta para..."
                            defaultValue=""
                            value={pergunta}
                            onChange={(e) => {
                                muda(e);
                            }}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Button type="submit">Enviar Questionamento</Button>
            </Form>

            <Container style={{backgroundColor:"gray" , borderRadius:"2rem"}}>
                <h1 >Questinamentos:</h1>
                <hr />
                {questionamentos.length > 0 ?
                    questionamentos.map((questionamento) => {
                        return (
                            <div className="m-3 p-4">
                                <h3>{questionamento}</h3>
                                <hr></hr>
                            </div>
                            
                        )
                    })
                    :
                    <p>
                        Nenhum questionamento foi feito.
                    </p>
                }
            </Container>

            <div>
                <Button
                    onClick={() => {
                        props.setDetalharCandidato(false);
                        props.setCandidatoSelecionado({});
                    }}>
                    Voltar
                </Button>
            </div>

            </Container>

            
        </Container>
    );
}