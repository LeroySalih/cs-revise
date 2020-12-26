import {useState, useEffect, useRef } from 'react';
import ReorderQuestion from '../ReorderQuestion';
import Button from '@material-ui/core/Button';

const reorderQuestion = (questionType) => {

  const [correct, setCorrect] = useState(null);
  const [readOnly, setReadOnly] = useState(false);

  const [answer, setAnswer] = useState('');
  const [question, setQuestion] = useState('');

  const inputRef = useRef();

  useEffect(()=> {
    handleNext();
  }, 
  []); 

  const handleInput = (items) => {

    setCorrect(null);
    setAnswer(items);
  }

  const handleCheck = () => {
    // check the answer

    
    const result = question.checkAnswer(answer);

    if (result){
      setReadOnly(true);
      setCorrect(true);
      
    } else {
      setCorrect(false);
      inputRef.current.focus()
    }
    
  }

  const handleNext = () => {
    setAnswer('')
    setQuestion(new questionType());
    setReadOnly(false);
    setCorrect(null);
  }



  return (
    <div>
      {question && question.getQuestionText()}
      <ReorderQuestion items={question.question} onChange={handleInput}/>
      
      
      {correct === null && <Button onClick={handleCheck}>Check</Button>}
      {correct && <span>Correct!<Button onClick={handleNext}>Next</Button></span>}
      {correct === false && <span>Incorrect, try again</span>}
      <style jsx>{`

        .question {
          font-family: monospace;
          font-size: 1.3rem;

        }
        .answer {
          margin-left: 1rem;
          padding: 5px;
        }
        
      `}
      </style>

    </div>
  )
}

export default reorderQuestion;