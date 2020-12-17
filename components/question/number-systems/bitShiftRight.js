import {useState, useEffect, useRef } from 'react';

import Button from '@material-ui/core/Button';
import getRandomInt from './getRandomInt';



class BitShiftRight {

  constructor() {
    this.question = [getRandomInt(16),Math.pow(2, (getRandomInt(3) + 1)) ];
  }

  getQuestionText (){ 
    return  (
      <span>Divide <span className="question">{Number(this.question[0]).toString(2).padStart(4, '0')} / {Number(this.question[1]).toString(2).padStart(4, '0')}</span> (answer in binary).</span>
      )
  }
  checkAnswer = (a) => parseInt(a,2) == Math.floor(this.question[0] / this.question[1])  

}

export default BitShiftRight;