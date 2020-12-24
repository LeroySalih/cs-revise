import {useState, useEffect, useRef } from 'react';

import Button from '@material-ui/core/Button';




class UploadAndDelete {

  questions = [
    
    {
      text: 'The command that we use to change existing data to the database is:',
      answers : [
        {text: 'WRITE.', isCorrect: false},
        {text: 'UPDATE.', isCorrect: true},
        {text: 'INSERT.', isCorrect: false},
        {text: 'SELECT.', isCorrect: false},
      ]
    },
    
    {
      text: 'Which command would set the items to 10 for all products with an id of "prod8":',
      answers : [
        {text: 'UPDATE Stock WHERE prodId = prod8 SET items = 10', isCorrect: false},
        {text: 'UPDATE Stock WHERE prodId = "prod8" SET items = 10', isCorrect: true},
        {text: 'UPDATE Stock SET items = 10 WHERE prodId = "prod8"', isCorrect: false},
        {text: 'UPDATE Stock WHERE prodId = "prod8" SET items = "10"', isCorrect: false},
      ]
    },
    
    {
      text: 'Which command would delete all records in a table?',
      answers : [
        {text: 'DELETE Products', isCorrect: true},
        {text: 'DELETE Products *', isCorrect: true},
        {text: 'DELETE * FROM Products', isCorrect: false},
        {text: 'DELETE ALL FROM Products', isCorrect: false},
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

export default UploadAndDelete;