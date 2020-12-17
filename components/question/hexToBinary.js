import {useState, useEffect, useRef } from 'react';

import Button from '@material-ui/core/Button';
import getRandomInt from './getRandomInt';



class HexToBinary {

  constructor() {
    this.question = getRandomInt(255)
  }

  getQuestionText (){ 
    return  (
      <span>Convert <span className="question">{Number(this.question).toString(16).padStart(2, '0')}</span> to binary.</span>
      )
  }
  checkAnswer = (a) => parseInt(a, 2) == this.question 

}

export default HexToBinary;