import React, { Component } from 'react';
import api from '../../../services/api';

import './styles.css';

export default class chart extends Component {

  state = {
    data: [],
    chartView: false
  }

 componentDidMount(){
    this.loadQuestions();
 }

 loadQuestions = async () => {
    try{
      const chartResponse = await api.get("/gera");
      this.setState({ data: chartResponse.data});
      console.log(chartResponse.data);
    }catch(err){
      console.log(err);
    }
  }

  render() {
    return (
      <div className="chart-container">
          <>
  
            <div className="bar" id="bar1" style={{ height: this.state.data.MuitoFeliz }}><span>{this.state.data.MuitoFeliz }</span></div>
            <div className="bar" id="bar2" style={{ height: this.state.data.Feliz  }}><span>{this.state.data.Feliz}</span></div>
            <div className="bar" id="bar3" style={{ height: this.state.data.Medio  }}><span>{this.state.data.Medio}</span></div>
            <div className="bar" id="bar4" style={{ height: this.state.data.Triste }}><span>{this.state.data.Triste}</span></div>
          
          </>
      </div>
        
     
    );
  }
}
