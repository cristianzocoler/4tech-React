import React from 'react';

import JobCard from './JobCard/JobCard';




class JobsList extends React.Component {

  state = {
    jobs: [
      { id: 1, name: 'Desenvolvedor Front-End Jr', description: 'auhhauha', salary: '1200', area: 'dev' },
      { id: 2, name: 'Tester JR ', description: 'sadadsadsaa', salary: '1200', area: 'tester' },
      { id: 3, name: 'Designer Jr', description: 'auhahajs bhsdb uyhauha', salary: '1200', area: 'dev' },
      { id: 4, name: 'Tester JR ', description: 'sad dasett hhh adsadsaa', salary: '1200', area: 'tester' },
      { id: 5, name: 'Desenvolvedor Front-End Jr', description: 'auhhau dasrtr ha', salary: '1200', area: 'dev' },
      { id: 6, name: 'Tester JR ', description: 'sadadssss ggbg adsaa', salary: '1200', area: 'tester' },
      { id: 7, name: 'Desenvolvedor Front-End Jr', description: 'auhhauh432re q34a', salary: '1200', area: 'dev' },
      { id: 8, name: 'Tester JR ', description: 'sadadsad 3e54 sadsaa', salary: '1200', area: 'tester' }
    ],
    hasError: false
  }

  jobRemoveHandler = ( paramId, paramName ) => {
    if (window.confirm(`Deseja realmente remover a vaga "${paramName}" ? `)) {
      const index = this.state.jobs.findIndex(job => job.id === paramId);
            
      let newList = this.state.jobs;
      newList.splice(index, 1)
      this.setState({ jobs: newList })

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
      jobRemoveHandler= { () => this.jobRemoveHandler(job.id, job.name) }
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