import React from 'react'
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import JobForm from '../JobForm/JobForm';


const AddVaga = () => (
    <div>
        <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
            Nova Vaga
    </Button>
        <UncontrolledCollapse toggler="#toggler">
            <Card>
                <CardBody>
                    </JobForm>
                </CardBody>
            </Card>
        </UncontrolledCollapse>
    </div>
)

export default AddVaga