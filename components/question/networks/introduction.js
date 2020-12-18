import {useState, useEffect, useRef } from 'react';

import Button from '@material-ui/core/Button';




class Introduction {

  questions = [
    {
      text: 'What is the name for a computer that is not linked to another computer?',
      answers : [
        {text: 'Stand alone', isCorrect: true},
        {text: 'Un-networked', isCorrect: false},
        {text: 'Non linked', isCorrect: false},
        {text: 'Isolated', isCorrect: false},
      ]
    },
    {
      text: 'What is the name for the connection between 2 or more computers?',
      answers : [
        {text: 'Wire', isCorrect: false},
        {text: 'Network', isCorrect: false},
        {text: 'Links', isCorrect: true},
        {text: 'Web', isCorrect: false},
      ]
    },
    {
      text: 'What is the role of the Switch?',
      answers : [
        {text: 'Connects devices creating a WAN', isCorrect: false},
        {text: 'Connects devices to the WWW', isCorrect: false},
        {text: 'Connects devices to the ETHERNET', isCorrect: false},
        {text: 'Connects devices creating a LAN', isCorrect: true},
      ]
    },
    {
      text: 'A network that has multiple owners and spans a wide geographic area is probably a:',
      answers : [
        {text: 'WAN', isCorrect: true},
        {text: 'WWW', isCorrect: false},
        {text: 'ETHERNET', isCorrect: false},
        {text: 'LAN', isCorrect: false},
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

export default Introduction;