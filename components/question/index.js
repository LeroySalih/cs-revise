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
import TransmissionMedium from './networks/transmission-medium';
import Topologies from './networks/topologies';
import Protocols from './networks/protocols';
import CommonProtocols from './networks/common-protocols';

import WhatAreDatabases from './databases/what-are-databases';
import HowAreDatabasesAreOrganised from './databases/how-are-databases-organised';
import HowToDesignATable from './databases/how-to-design-a-table';

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
    case 'networks-introduction' : return multipleChoiceQuestion(new NetworksIntroduction(type.split("::")[1]))
    case 'networks-transmission-media' : return multipleChoiceQuestion(new TransmissionMedium(type.split("::")[1]))
    case 'networks-topology' : return multipleChoiceQuestion(new Topologies(type.split("::")[1]))
    case 'networks-protocols' : return multipleChoiceQuestion(new Protocols(type.split("::")[1]))
    case 'networks-common-protocols' : return multipleChoiceQuestion(new CommonProtocols(type.split("::")[1]))
    case 'databases-what-are-databases' : return multipleChoiceQuestion(new WhatAreDatabases(type.split("::")[1]))
    case 'databases-how-are-databases-organised' : return multipleChoiceQuestion(new HowAreDatabasesAreOrganised(type.split("::")[1]))
    case 'databases-how-to-design-a-table' : return multipleChoiceQuestion(new HowToDesignATable(type.split("::")[1]))

    default: return <div>Unknown Type {JSON.stringify(type)}</div>
  }
  
}

export default factory;