import React from 'react'

const CollapseVagas = (props) => (
    <div>
        <p>
            <div>
            <a className="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false"
                aria-controls="collapseExample">
                Nova Vaga
            </a>
            <div className="collapse mb-3" id="collapseExample">
                {props.children}
            </div>
            </div>
            <a className="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false"
                aria-controls="collapseExample">
                Nova Vaga
            </a>
            <div className="collapse mb-3" id="collapseExample">
                {props.children}
            </div>
            
        </p>
    </div>
)

export default CollapseVagas