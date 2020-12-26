import {useState, useEffect, useRef } from 'react';

import Button from '@material-ui/core/Button';




class CharacterEncoding {

  questions = [
    {
      text: 'A Primary Key will:',
      answers : [
        {text: 'Show us the last field.', isCorrect: false},
        {text: 'Show us the first row.', isCorrect: false},
        {text: 'Show us the most important row.', isCorrect: false},
        {text: 'Uniquely identify a row.', isCorrect: true},
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

export default CharacterEncoding;