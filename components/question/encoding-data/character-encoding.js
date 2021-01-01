import {useState, useEffect, useRef } from 'react';

import Button from '@material-ui/core/Button';




class CharacterEncoding {

  questions = [
    {
      text: 'ASCII stands for:',
      answers : [
        {text: 'American Standard Code for Information Interchange.', isCorrect: true},
        {text: 'American System Changing Internal Information.', isCorrect: false},
        {text: 'American System for Computing Internal Information.', isCorrect: false},
        {text: 'American Standard for Changing Internal Information.', isCorrect: false},
      ]
    }, 

    {
      text: 'Standard ASCII contains:',
      answers : [
        
        {text: '128 Characters.', isCorrect: true},
        {text: '26 Characters (letters A-Z).', isCorrect: false},
        {text: '64 Characters (A-z, 0-9, + 2).', isCorrect: false},
        {text: 'Any number of Characters.', isCorrect: false},
      ]
    }, 

    {
      text: 'Extended ASCII contains:',
      answers : [
        {text: '127 Characters.', isCorrect: false},
        {text: '26 Characters (letters A-Z).', isCorrect: false},
        {text: '64 Characters (A-z, 0-9, + 2).', isCorrect: false},
        {text: '256 Characters.', isCorrect: true},
        
      ]
    }, 

    {
      text: 'The character 😎 will be found in',
      answers : [
        {text: 'Standard ASCII.', isCorrect: false},
        {text: 'Extended ASCII.', isCorrect: false},
        {text: 'UNICODE.', isCorrect: true},
        {text: 'iOS.', isCorrect: false},
        
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