import {useState} from 'react'

import Question from "../question"

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


const MultiChoiceQuestion = ({question, onChange}) => {

  const [value, setValue] = useState('0')
  const [status, setStatus]  = useState(null);
  
  const handleChange = () => {
    const result = question.answers[parseInt(value)].isCorrect == 'true' 
    setStatus(result)
    onChange && onChange(result, value)
  }

  const handleRadioChange = (event) => {
    setStatus(null)
    setValue(event.target.value);
  };

  return <div>
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
        {status && 'Correct'}
        {status==false && 'Incorrect'}
      </div>
    </div>
}


export default MultiChoiceQuestion;