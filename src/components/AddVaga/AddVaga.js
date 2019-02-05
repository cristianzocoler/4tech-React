import React from 'react'
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';


const AddVaga = () => (
    <div>
        <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
            Nova Vaga
    </Button>
        <UncontrolledCollapse toggler="#toggler">
            <Card>
                <CardBody>
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <label for="inputEmail4">Nome</label>
                                <input type="email" className="form-control" id="inputEmail4" placeholder="" />
                            </div>
                            <div className="form-group col-md-12">
                                <label for="inputPassword4">Descrição</label>
                                <input type="password" className="form-control" id="inputPassword4" placeholder="" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="exampleFormControlTextarea1">Habilidades Necessárias </label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="exampleFormControlTextarea1">Diferenciais </label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="inputAddress">Salário Base</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="" />
                            </div>
                            <div className="form-group col-md-4">
                                <label for="inputState">Àrea</label>
                                <select id="inputState" className="form-control">
                                    <option selected>Desenvolvimento</option>
                                    <option>...</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </CardBody>
            </Card>
        </UncontrolledCollapse>
    </div>
)

export default AddVaga