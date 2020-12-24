import {useState, useEffect, useRef } from 'react';

import Button from '@material-ui/core/Button';




class HowToDesignATable {

  questions = [
    
    {
      text: 'The most common Database language is:',
      answers : [
        {text: 'Python.', isCorrect: false},
        {text: 'CRUD.', isCorrect: false},
        {text: 'SQL.', isCorrect: true},
        {text: 'Javascript.', isCorrect: false},
      ]
    },
    
    {
      text: 'A table name should be:',
      answers : [
        {text: 'Able to hold names and numbers.', isCorrect: false},
        {text: 'In all capital letters.', isCorrect: false},
        {text: 'Short and easy to ready.', isCorrect: false},
        {text: 'A noun and a plural.', isCorrect: true},
      ]
    },

    {
      text: 'A good data type for a field that contains pupil names is:',
      answers : [
        {text: 'integer.', isCorrect: false},
        {text: 'text (varchar).', isCorrect: true},
        {text: 'real.', isCorrect: false},
        {text: 'boolean.', isCorrect: false},
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

export default HowToDesignATable;