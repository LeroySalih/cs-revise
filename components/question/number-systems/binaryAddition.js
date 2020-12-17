import {useState, useEffect, useRef } from 'react';

import Button from '@material-ui/core/Button';
import getRandomInt from './getRandomInt';



class BinaryAddition {

  constructor() {
    console.log('DenaryToBinary Created')
    this.question = [getRandomInt(8), getRandomInt(8)]
  }

  getQuestionText (){ 
    return  (
      <span>Calculate <span className="question">{Number(this.question[0]).toString(2).padStart(4, '0')} + {Number(this.question[1]).toString(2).padStart(4, '0')}</span> (answer in binary).</span>
      )
  }
  checkAnswer = (a) => parseInt(a,2) == (this.question[0] + this.question[1])

}

export default BinaryAddition;