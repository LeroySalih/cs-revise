import {useState, useEffect, useRef } from 'react';

import Button from '@material-ui/core/Button';




class SoundEncoding {

  questions = [
    {
      text: 'A sample rate of 10Hertz (Hz) means:',
      answers : [
        {text: 'An amplitude of 10.', isCorrect: true},
        {text: 'A wave frequency of 10 per sec.', isCorrect: false},
        {text: '10 samples per sec.', isCorrect: false},
        {text: 'American Standard for Changing Internal Information.', isCorrect: false},
      ]
    }, 

    {
      text: 'A digital wave:',
      answers : [
        
        {text: 'Is exactly the same the an analogue.', isCorrect: false},
        {text: 'Is more like an analogue wave with an increasing number of samples.', isCorrect: true},
        {text: 'Is less like an analogue wave with an increasing number of samples.', isCorrect: false},
        {text: "Doesn't change with an increasing number of samples.", isCorrect: false},
      ]
    }, 

    {
      text: 'A recording with a bit depth of 3 bits, a sample rate of 20Hz for 10 secs, has a file size of:',
      answers : [
        {text: '600 bytes', isCorrect: false},
        {text: '600 bits', isCorrect: true},
        {text: '60 Bytes', isCorrect: false},
        {text: '256 Characters.', isCorrect: false},
        
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

export default SoundEncoding;