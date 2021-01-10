import {QuestionContext} from '../../components/question';
import {useContext} from 'react';
import Video from './video';
import Question from '../question'

const Task = ({task}) => {

  const {questions} = useContext(QuestionContext);

  const getQuestion = (task) => {
    const questionKey = task.questionKey;
    const module = questionKey.split("::")[0]
    const topic = questionKey.split("::")[1]
    const id = parseInt(questionKey.split("::")[2])

    
    return questions[topic][id]
  }
  
  if (!task)
    return (<></>);

  if (task.type === 'video')
    return <Video task={task}/>

  if (task.type === 'question')
    return (<div className="question">
              <Question  questionKey={task.questionKey} question={getQuestion(task)}/>
            <style jsx>{`
              .question {
                background-color: #0000f020;
                border: solid 1px #0000f030;
                padding: 10px;
                border-radius: 5px;
                margin: 10px;
              }
            `}
            </style>
           </div>)

  return <div>Unknown Task Type</div>
}

export default Task
