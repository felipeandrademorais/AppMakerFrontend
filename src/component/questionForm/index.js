/* eslint-disable default-case */
import React, { Component } from 'react';
import '../styles.css';
import Question1 from '../question1';
import Question2 from '../question2';
import Question3 from '../question3';
import Final from '../final';

export default class QuestionForm extends Component {
state = {
    step: 1
}

nextStep = () => {
    const { step } = this.state;
    this.setState({
        step: step + 1
    });
}

prevStep = () => {
    const { step } = this.state;
    this.setState({
        step: step - 1
    });
}

initStep = () =>{
    this.setState({
        step: 1
    });
}

  render() {
    const { step } = this.state;
    
    switch(step){
        case 1:
            return (
                <Question1 
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                />
            )
        case 2:
            return (
                <Question2 
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                printState={this.printState}
                />
            )
        case 3:
            return (
                <Question3 
                 nextStep={this.nextStep}
                 handleChange={this.handleChange}
                />
            )
        case 4: 
            return (
                <Final 
                 initStep={this.initStep}
                />
            )

    }

  }
}