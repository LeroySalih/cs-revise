import {useState, useContext } from 'react';
import {IdentityContext} from '../../src/context/identity';
import MultiChoiceQuestion from '../multi-choice-question';
import axios from 'axios';

const Question = ({question, questionKey}) => {

    // get the current identity (if any)    
    const {identity} = useContext(IdentityContext)
  
    const [correct, setCorrect] = useState(null);
    const [count, setCount] = useState(null);
  
    const handleOnAnswerChange = async (isCorrect, index) => {
      console.log(email, questionKey, isCorrect, index)
  
      // Retrieve the times this question has been answered correctly by this email
      //if (email){
      //  const response = await axios.get(`/api/answer/${email}/${questionKey}/${index}/${isCorrect}`)
  
      //  const {count, correct} = response.data;
  
      //  setCount(count)
      //  setCorrect(correct)
      //}
    }
  
    let output = null;
  
    switch (question.type) {
      
      case 'multi-choice' : output = (<MultiChoiceQuestion questionKey={questionKey} question={question} onAnswerChange={handleOnAnswerChange}/>); break;
      default: output = <div>Unknown Question Type <pre>{question.type}</pre></div>
    }
    return <div>
              {output}
              {(count !== null) && <div>{`Answered: ${count} times, correct ${correct} times.`}</div>}
          </div>
  }
  
  export default Question;