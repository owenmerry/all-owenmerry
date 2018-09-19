import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {


  //react functions

  constructor(props) {
    super(props);

    //default values
    this.state = {
      data: [],
      isLoading: true,
    };

    // bind functions
    this.getData = this.getData.bind(this);


  }

  componentDidMount() {

    //get data
    this.getData();
  }


  // my functions

  getData(){
    //defaults
    var apiLink = "";

    //variables
    apiLink = '/api/projects.json';
    
    //get data
    fetch(apiLink)
      .then(response => response.json())
      .then(data => this.setState({ data ,isLoading:false }));

  }




  render() {

    //if loading
    if (this.state.isLoading) {
      return <p>Loading ...</p>;
    }

    return (
      <div className="App">


        {this.state.data.projects.map(project =>
            <div>
            <h2>{project.title}</h2>
            <ul>
            {project.links.map(link =>
              <li><a target="_blank" href={link.link}>{link.text}</a></li>
            )}
            </ul>
            </div>
          )}
      </div>
    );
  }
}

export default App;
