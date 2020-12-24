import {useState, useEffect, useRef } from 'react';

import Button from '@material-ui/core/Button';




class LinkingTables {

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
    {
      text: 'A Foreign Key will:',
      answers : [
        {text: 'Link a field in this table to a field in another table.', isCorrect: false},
        {text: 'Link a primary key in this table to a primary key in another table.', isCorrect: false},
        {text: 'Link a primary key in this table to another table.', isCorrect: false},
        {text: 'Link a field in this table to a primary key in another table.', isCorrect: true},
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

export default LinkingTables;