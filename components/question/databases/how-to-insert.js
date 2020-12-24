import {useState, useEffect, useRef } from 'react';

import Button from '@material-ui/core/Button';




class HowToInsertData {

  questions = [
    
    {
      text: 'The command that we use to write data to the database is:',
      answers : [
        {text: 'WRITE.', isCorrect: false},
        {text: 'UPDATE.', isCorrect: false},
        {text: 'INSERT.', isCorrect: true},
        {text: 'SELECT.', isCorrect: false},
      ]
    },
    
    {
      text: 'When we write a field:',
      answers : [
        {text: 'Text is not in quotes, numbers are', isCorrect: false},
        {text: 'Text is in quotes, numbers are not.', isCorrect: true},
        {text: 'Text is in quotes, numbers are.', isCorrect: false},
        {text: 'Text is not in quotes,numbers are not in quotes.', isCorrect: false},
      ]
    },

    {
      text: 'Which of the following commands are valid:',
      answers : [
        {text: 'INSERT INTO People (John, 33).', isCorrect: false},
        {text: 'INSERT INTO People (name, age) VALUES ("John", 33).', isCorrect: true},
        {text: 'INSERT People (name, age) VALUES ("John", 33).', isCorrect: false},
        {text: 'INSERT INTO (name, age) VALUES ("John", 33).', isCorrect: false},
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

export default HowToInsertData;