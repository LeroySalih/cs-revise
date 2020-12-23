import {useState, useEffect, useRef } from 'react';

import Button from '@material-ui/core/Button';




class HowToDesignATable {

  questions = [
    
    {
      text: 'Most applications include:',
      answers : [
        {text: 'Functionality and Audio.', isCorrect: false},
        {text: 'Functionality and Output.', isCorrect: false},
        {text: 'Functionality and data.', isCorrect: true},
        {text: 'Data and graphics.', isCorrect: false},
      ]
    },
    
    {
      text: 'CRUD functionality is an acronym for:',
      answers : [
        {text: 'Create, recycle, upload, distribute.', isCorrect: false},
        {text: 'Create, read, update and delete.', isCorrect: true},
        {text: 'Create, read, upload and data.', isCorrect: true},
        {text: 'Create, reload, update and distribute.', isCorrect: false},
      ]
    },

    {
      text: 'Microsoft Access can be used for:',
      answers : [
        {text: 'Upto 3 million users.', isCorrect: false},
        {text: 'Upto 300 users.', isCorrect: true},
        {text: 'Upto 30 users.', isCorrect: true},
        {text: 'Upto 3 users.', isCorrect: false},
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