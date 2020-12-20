import {useState, useEffect, useRef } from 'react';

import Button from '@material-ui/core/Button';

import BinaryToDenary from './number-systems/binaryToDenary';
import DenaryToBinary from './number-systems/denaryToBinary';
import BinaryAddition from './number-systems/binaryAddition';
import BitShiftLeft from './number-systems/bitShiftLeft';
import BitShiftRight from './number-systems/bitShiftRight';
import BinaryToHex from './number-systems/binaryToHex';
import HexToBinary from './number-systems/hexToBinary';
import ReorderBinary from './number-systems/reorderBinary';

import NetworksIntroduction from './networks/introduction';

import numericQuestion from './numericQuestion';
import multipleChoiceQuestion from './multiChoiceQuestion';
import reorderQuestion from './reorderQuestion';

const factory = ({type}) => {

  const key = (type && type.split("::")[0]) || '';
  
  switch (key){
    case 'binary-to-denary' : return numericQuestion(BinaryToDenary);
    case 'denary-to-binary' : return numericQuestion(DenaryToBinary);
    case 'order-binary' : return reorderQuestion(ReorderBinary);
    case 'binary-addition' : return numericQuestion(BinaryAddition);
    case 'bit-shift-left' : return numericQuestion(BitShiftLeft);
    case 'bit-shift-right' : return numericQuestion(BitShiftRight);
    case 'binary-to-hex' : return numericQuestion(BinaryToHex);
    case 'hex-to-binary' : return numericQuestion(HexToBinary);
    case 'networks-introduction' : console.log('Index::Type', type); return multipleChoiceQuestion(new NetworksIntroduction(type.split("::")[1]))
    default: return <div>Unknown Type {JSON.stringify(type)}</div>
  }
  
}

export default factory;