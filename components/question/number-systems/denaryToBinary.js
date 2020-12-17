import {useState, useEffect, useRef } from 'react';

import Button from '@material-ui/core/Button';
import getRandomInt from './getRandomInt';



class DenaryToBinary {

  constructor() {
    this.question = getRandomInt(16)
  }

  getQuestionText (){ 
    return  (
      <span>Convert <span className="question">{this.question}</span> to binary.</span>
      )
  }
  checkAnswer = (a) => parseInt(a,2) == this.question

}

export default DenaryToBinary;