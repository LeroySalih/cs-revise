import {useState, useEffect, useRef } from 'react';

import Button from '@material-ui/core/Button';




class SliceSortFilter {

  questions = [
    
    {
      text: 'Extracting specific fields (vertically) is called:',
      answers : [
        {text: 'FILTERING.', isCorrect: false},
        {text: 'SORTING.', isCorrect: false},
        {text: 'SLICING.', isCorrect: true},
        {text: 'SELECT.', isCorrect: false},
      ]
    },

    {
      text: 'Extracting specific rows (horizontally) is called:',
      answers : [
        {text: 'FILTERING.', isCorrect: true},
        {text: 'SORTING.', isCorrect: false},
        {text: 'SLICING.', isCorrect: false},
        {text: 'SELECT.', isCorrect: false},
      ]
    },

    {
      text: 'Putting the table in order is called',
      answers : [
        {text: 'FILTERING.', isCorrect: false},
        {text: 'SORTING.', isCorrect: true},
        {text: 'SLICING.', isCorrect: false},
        {text: 'SELECT.', isCorrect: false},
      ]
    },

    {
      text: 'Putting the table in order when we order from lowest to highest is called',
      answers : [
        {text: 'ASCENDING.', isCorrect: true},
        {text: 'DESCENDING.', isCorrect: false},
        {text: 'MUTUALLY', isCorrect: false},
        {text: 'EXTRACT.', isCorrect: false},
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

export default SliceSortFilter;