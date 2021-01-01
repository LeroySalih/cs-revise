import {useState, useEffect, useRef } from 'react';

import Button from '@material-ui/core/Button';




class ImageEncoding {

  questions = [
    {
      text: 'An image that uses a colour depth of 3 bits can contain:',
      answers : [
        {text: '8 different colours.', isCorrect: true},
        {text: '3 different colours.', isCorrect: false},
        {text: '4 different colours.', isCorrect: false},
        {text: '7 different colours.', isCorrect: false},
      ]
    }, 

    {
      text: 'An image that uses a colour depth of 1 bit can contain:',
      answers : [
        {text: '2 different colours.', isCorrect: false},
        {text: '1 different colours.', isCorrect: true},
        {text: '0 different colours.', isCorrect: false},
        {text: '3 different colours.', isCorrect: false},
      ]
    },
    

    {
      text: 'A CD has a sample rate of:',
      answers : [
        {text: '41, 000 Hz.', isCorrect: true},
        {text: '41 Hz.', isCorrect: false},
        {text: '41000 KHZ.', isCorrect: false},
        {text: 'Variable.', isCorrect: false},
        
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

export default ImageEncoding;