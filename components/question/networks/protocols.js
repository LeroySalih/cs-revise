import {useState, useEffect, useRef } from 'react';

import Button from '@material-ui/core/Button';




class Protocols {

  questions = [
    {
      text: 'A set of rules can be described as a:',
      answers : [
        {text: 'data set.', isCorrect: false},
        {text: 'protocol.', isCorrect: false},
        {text: 'signal set.', isCorrect: true},
        {text: 'transmission.', isCorrect: false},
      ]
    },
    {
      text: 'A protocol is used to allow devices to understand :',
      answers : [
        {text: 'the cables that are sent and received.', isCorrect: false},
        {text: 'the lights that are sent and received.', isCorrect: false},
        {text: 'the sounds that are sent and received.', isCorrect: false},
        {text: 'the ones and zeros that are sent and received.', isCorrect: true},
      ]
    },

    {
      text: 'In order, the four layers of the Four Layer Model are: :',
      answers : [
        {text: 'Application, Link, Network, Transport.', isCorrect: false},
        {text: 'Application, Transport, Network, Link.', isCorrect: true},
        {text: 'Application, Link, Transport, Network.', isCorrect: false},
        {text: 'Application, Network, Link, Transport.', isCorrect: false},
      ]
    },
    
  ]
  
  constructor(index) {
    this.question = this.questions[parseInt(index)];
  }

  getQuestionText (){ 
    return  this.question.text;
  }

  getAnswers() {
    return this.question.answers;
  }

  checkAnswer = (a) =>  this.question.answers[a].isCorrect

}

export default Protocols;