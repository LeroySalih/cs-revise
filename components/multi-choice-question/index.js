import {useState, useContext} from 'react'

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import {QuestionContext} from '../../components/question'
import { SettingsAccessibilityOutlined } from '@mui/icons-material';

const MultiChoiceQuestion = ({question, onChange, questionKey}) => {

  const {session, setSession, incAnswer} = useContext(QuestionContext);

  const [value, setValue] = useState('0')
  //const [status, setStatus]  = useState(null);
  

  const getStatus = () => {

    if (!session) return null;

    const [unit, chapter, index]  = questionKey.split("::")

    return session[chapter][index];
  }

  const setStatus = (status) => {
    console.log("Updating Session to")
    const [unit, chapter, index]  = questionKey.split("::")
    /*
    setSession ((prev) => { 
        prev[chapter][index] = status; 
        console.log(prev); 
        return prev;
      })
      */
    const tmp = Object.assign({}, session);
    tmp[chapter][index] = status
    setSession(tmp);
    if (status != null) {
      incAnswer();
    }
  }

  const handleChange = () => {
    const result = question.answers[parseInt(value)].isCorrect == 'true';
    const [unit, chapter, index]  = questionKey.split("::");
    setStatus(result);
  }

  const handleRadioChange = (event) => {
    const [unit, chapter, index]  = questionKey.split("::")
    setValue(event.target.value)
    setStatus(null)
  };

  return <div className={`question ${getStatus() && 'correct'}  ${getStatus() == false && 'incorrect'}` }>
      <div>{question.text}</div>
      
      <div>
      <FormControl component="fieldset">
        <FormLabel component="legend">Answers</FormLabel>
        <RadioGroup aria-label="answers" name="answers" value={value} onChange={handleRadioChange}>
          {question.answers.map((a, i) => <FormControlLabel key={i} value={`${i}`} control={<Radio />} label={a.text} />)}
      </RadioGroup>
      </FormControl>
      </div>
      
      <div>
        <button onClick={handleChange}>Check</button>
        {getStatus() && 'Correct'}
        {getStatus() == false && 'Incorrect'}
      </div>
      <style jsx>{`
      .question {
        background-color: #e8e8ff20;
        border: solid 1px #0000f030;
        padding: 10px;
        border-radius: 5px;
        margin: 10px;
      }
      
        .correct {
          background: rgb(33,208,1);
          background: linear-gradient(90deg, rgba(195,255,191,1) 0%, rgba(63,255,51,0.75) 100%);
        }

        .incorrect {
          background: linear-gradient(90deg, rgba(255,191,193,1) 0%, rgba(255,51,56,0.75) 100%);
        }
      
      
      `}


      
      </style>
    </div>
}


export default MultiChoiceQuestion;