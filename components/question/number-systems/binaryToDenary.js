import {useState, useEffect, useRef } from 'react';

import Button from '@material-ui/core/Button';
import getRandomInt from './getRandomInt';



class BinaryToDenary {

  constructor() {
    this.question = getRandomInt(16)
  }

  getQuestionText (){ 
    return  (
      <span>Convert <span className="question">{Number(this.question).toString(2).padStart(4, '0')}</span> to denary.</span>
      )
  }
  checkAnswer = (a) => a == this.question

}

export default BinaryToDenary;