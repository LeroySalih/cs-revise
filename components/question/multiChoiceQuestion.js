import {useState, useEffect, useRef } from 'react';
import Button from '@material-ui/core/Button';

const multiChoiceQuestion = (questionType) => {

  const [correct, setCorrect] = useState(null);
  const [readOnly, setReadOnly] = useState(false);

  const [answer, setAnswer] = useState('');
  const [question, setQuestion] = useState('');

  console.log('QuestionType', questionType)

  useEffect(()=> {
    console.log('QuestionType', questionType)
    setQuestion(questionType)
  }, [])
  
  const handleTry = () => {
    setCorrect(null);
  }

  const handleCheck = (index) => {
    // check the answer
    const result = question.checkAnswer(index);

    setAnswer(index);

    if (result){
      setReadOnly(true);
      setCorrect(true);
    } else {
      setCorrect(false);
      
    }
    
  }
  
  if (!question) {
    return <div>No Question Found</div>
  }

  return (
    <div>
      
      <div>{question && question.getQuestionText()}</div>
      <div className="answerPanel">
        {question && question.getAnswers().map((a, i) => (
            <button 
              key={i}
              disabled={readOnly}
              className={`answerButton ${(correct && i == answer) ? 'correct' : ''}`}
              onMouseEnter={handleTry}
              onClick={() => {handleCheck(i);}}
              >{a.text}</button>
          ))}
      </div>
      
      
      {correct && <span>Correct!</span>}
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

        .answerPanel {
          display: grid;
          grid-template-columns : 1fr 1fr;
          margin-top: 10px;
          grid-gap: 10px;
        }

        .answerButton {
          padding: 10px;
          opacity: 0.5;
        }

        .answerButton:hover {
          padding: 10px;
          opacity: 1;
        }

        .correct {
          border : 2px solid green;
          opacity: 1;
          
        }

        
        
      `}
      </style>

    </div>
  )
}

export default multiChoiceQuestion;