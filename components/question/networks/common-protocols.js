import {useState, useEffect, useRef } from 'react';

import Button from '@material-ui/core/Button';




class CommonProtocols {

  questions = [
    
    {
      text: 'This protocol receives email:',
      answers : [
        {text: 'HTTPS.', isCorrect: false},
        {text: 'FTP.', isCorrect: false},
        {text: 'SMTP.', isCorrect: false},
        {text: 'IMAP.', isCorrect: true},
      ]
    },
    
    {
      text: 'This protocol sends email:',
      answers : [
        {text: 'HTTPS.', isCorrect: false},
        {text: 'FTP.', isCorrect: false},
        {text: 'SMTP.', isCorrect: true},
        {text: 'IMAP.', isCorrect: false},
      ]
    },
    {
      text: 'This protocol receives email:',
      answers : [
        {text: 'HTTPS.', isCorrect: false},
        {text: 'FTP.', isCorrect: false},
        {text: 'SMTP.', isCorrect: false},
        {text: 'IMAP.', isCorrect: true},
      ]
    },
    {
      text: 'This protocol transfers files between devices:',
      answers : [
        {text: 'HTTPS.', isCorrect: false},
        {text: 'FTP.', isCorrect: true},
        {text: 'SMTP.', isCorrect: false},
        {text: 'IMAP.', isCorrect: false},
      ]
    },
    {
      text: 'This protocol transfers webpages securely:',
      answers : [
        {text: 'HTTPS.', isCorrect: true},
        {text: 'FTP.', isCorrect: false},
        {text: 'SMTP.', isCorrect: false},
        {text: 'IMAP.', isCorrect: false},
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

export default CommonProtocols;