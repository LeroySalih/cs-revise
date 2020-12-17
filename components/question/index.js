import {useState, useEffect, useRef } from 'react';

import Button from '@material-ui/core/Button';

import BinaryToDenary from './binaryToDenary';
import numericQuestion from './numericQuestion';



const factory = ({type}) => {
  console.log('Type', type)

  switch (type){
    case 'binary-to-denary' : return numericQuestion(BinaryToDenary);
    default: return <div>Unknown Type</div>
  }
  
}

export default factory;