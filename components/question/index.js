import {useState, useEffect, useRef } from 'react';
import { useMsalAuthentication, useMsal, useAccount, AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";

import QuestionContext from './question-context';

import MultiChoiceQuestion from '../multi-choice-question';

import axios from 'axios';

//export default factory;

const Question = ({question, questionKey}) => {

  const { instance, accounts } = useMsal();
  const email = accounts && accounts[0] && accounts[0].username;

  const [correct, setCorrect] = useState(null);
  const [count, setCount] = useState(null);

  const handleOnChange = async (isCorrect, index) => {
    console.log(email, questionKey, isCorrect, index)
    if (email){
      const response = await axios.get(`/api/answer/${email}/${questionKey}/${index}/${isCorrect}`)

      const {count, correct} = response.data;

      setCount(count)
      setCorrect(correct)
    }
  }

  let output = null;

  switch (question.type) {
    
    case 'multi-choice' : output = (<MultiChoiceQuestion question={question} onChange={handleOnChange}/>); break;
    default: output = <div>Unknown Question Type <pre>{question.type}</pre></div>
  }
  return <div>
            {output}
            {(count !== null) && <div>{`Answered: ${count} times, correct ${correct} times.`}</div>}
        </div>
}

export default Question;

export {QuestionContext};