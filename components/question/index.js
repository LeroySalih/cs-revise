import {useState, useEffect, useRef } from 'react';

import Button from '@material-ui/core/Button';

import BinaryToDenary from './binaryToDenary';
import DenaryToBinary from './denaryToBinary';
import BinaryAddition from './binaryAddition';
import BitShiftLeft from './bitShiftLeft';
import BitShiftRight from './bitShiftRight';
import BinaryToHex from './binaryToHex';
import HexToBinary from './hexToBinary';

import numericQuestion from './numericQuestion';



const factory = ({type}) => {
  switch (type){
    case 'binary-to-denary' : return numericQuestion(BinaryToDenary);
    case 'denary-to-binary' : return numericQuestion(DenaryToBinary);
    case 'binary-addition' : return numericQuestion(BinaryAddition);
    case 'bit-shift-left' : return numericQuestion(BitShiftLeft);
    case 'bit-shift-right' : return numericQuestion(BitShiftRight);
    case 'binary-to-hex' : return numericQuestion(BinaryToHex);
    case 'hex-to-binary' : return numericQuestion(HexToBinary);
    default: return <div>Unknown Type</div>
  }
  
}

export default factory;