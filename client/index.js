import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css'


class App extends React.Component{
  constructor(props) {
    super(props)
  }
  render() {
    return(
        <div>
          <h1>My Job Apps</h1>
          <JobContainer/>
        </div>
    )
  }
}

class JobContainer extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      jobList: null
    }
    this.makeCard()
  }

  makeCard() {
    fetch('http://localhost:3000/jobs/')
      .then(data => {
        return data.json()
      })
      .then(data => {
        const jobs = [];
        data.forEach(job => {
          jobs.push(<Card 
            key={job._id}
            companyName = {job.companyName} 
            title = {job.title} 
            status = {job.status}
          />);
          this.setState({jobList: jobs})
        });
    })
  }

  render() {
    // const jobs = [];
    // fetch('http://localhost:3000/jobs/')
    //   .then(data => {
    //     data.json()
    //   })
    //   .then(data => console.log(data))
    return(
      <div className='test'>
        {this.state.jobList}
      </div>
    )
  }
}

const Card = (props) => {
  return(
    <div className='card'>
      <h1>{props.companyName}</h1>
      <h3>{props.title}</h3>
      <p>{props.status}</p>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'));

// .then(data.forEach(job => {

// jobs.push(<Card 
//   companyName = {job.companyName} 
//   title = {job.title} 
//   status = {job.status}
// />);
// this.setState({jobList: jobs})

// const jobs = [];
//         data.forEach(job => {
//           jobs.push(<Card 
//             companyName = {data.companyName} 
//             title = {data.title} 
//             status = {data.status}
//           />);
//           this.setState({jobList: jobs})
//         });