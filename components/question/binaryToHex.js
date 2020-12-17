import {useState, useEffect, useRef } from 'react';

import Button from '@material-ui/core/Button';
import getRandomInt from './getRandomInt';



class BinaryToHex {

  constructor() {
    this.question = getRandomInt(255)
  }

  getQuestionText (){ 
    return  (
      <span>Convert <span className="question">{Number(this.question).toString(2).padStart(8, '0')}</span> to hex.</span>
      )
  }
  checkAnswer = (a) => { console.log(a, parseInt(a, 16) == this.question, parseInt(a, 16) ,this.question); return parseInt(a, 16) == this.question }

}

export default BinaryToHex;