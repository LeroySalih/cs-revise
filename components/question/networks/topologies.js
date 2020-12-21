import {useState, useEffect, useRef } from 'react';

import Button from '@material-ui/core/Button';




class Topologies {

  questions = [
    {
      text: 'There are :',
      answers : [
        {text: 'two types of topology; star and WAN', isCorrect: false},
        {text: 'two types of topology; star and LAN.', isCorrect: false},
        {text: 'two types of topology; LAN and Bus.', isCorrect: false},
        {text: 'two types of topology; star and bus', isCorrect: true},
      ]
    },
    {
      text: 'Which topology is reliant on a single cable ?',
      answers : [
        {text: 'Star', isCorrect: false},
        {text: 'WAN.', isCorrect: false},
        {text: 'Cable.', isCorrect: false},
        {text: 'BUS', isCorrect: true},
      ]
    },
   {
      text: 'Which topology is allows every device to see all data, raising privacy concerns?',
      answers : [
        {text: 'Star', isCorrect: false},
        {text: 'WAN.', isCorrect: false},
        {text: 'Cable.', isCorrect: false},
        {text: 'BUS', isCorrect: true},
      ]
    },
    {
      text: 'Which topology is easiest to identify fault locations?',
      answers : [
        {text: 'Star', isCorrect: true},
        {text: 'WAN.', isCorrect: false},
        {text: 'Cable.', isCorrect: false},
        {text: 'BUS', isCorrect: false},
      ]
    },
    {
      text: 'Which topology has a higher cost?',
      answers : [
        {text: 'Star', isCorrect: true},
        {text: 'WAN.', isCorrect: false},
        {text: 'Cable.', isCorrect: false},
        {text: 'BUS', isCorrect: false},
      ]
    }    
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

export default Topologies;