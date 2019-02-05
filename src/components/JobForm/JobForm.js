import React from 'react'

const JobForm = () => (
    <div className="card">
        <div className="card-body">
            <div>
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
                    <div className="form-group">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                            <label className="form-check-label" for="gridCheck">
                                Vaga para PCD
                            </label>
                        </div>
                    </div>
                    <div className="container text-right">
                        <button type="button" className="btn btn-success">Salvar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
)

export default JobForm