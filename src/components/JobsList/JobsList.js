import React from 'react';

import JobCard from './JobCard/JobCard';




class JobsList extends React.Component {

  state = {
    jobs: [
      { name: 'Desenvolvedor Front-End Jr', description: 'auhhauha', salary: '1200', area: 'dev' },
      { name: 'Tester JR ', description: 'sadadsadsaa', salary: '1200', area: 'tester' }
    ]
  }

  jobRemoveHandler = ( paramName ) => {
    if (window.confirm(`Deseja realmente remover a vaga "${paramName}" ? `)) {
      window.alert('Removido com sucesso ! ');

      
    }
  }

  jobEditHandler = (paramName) => {
    if  (window.confirm(`Deseja editar a vaga "${paramName}" ? `)) {
      window.alert('')
    }
  }




  render() {
    const renderJobs = this.state.jobs.map(job => {
      return <JobCard 
      name = {job.name}
      description = {job.description}
      salary = {job.salary}
      area = {job.area}
      jobRemoveHandler= { () => this.jobRemoveHandler(job.name) }
      />
    });

    return (
      <div className="row">
        {renderJobs}
      </div>
    )
  }
}



export default JobsList;