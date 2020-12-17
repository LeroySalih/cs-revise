import Video from './video';
import Question from '../question'

const Task = ({task}) => {
  
  if (!task)
    return (<></>);

  if (task.type === 'video')
    return <Video task={task}/>

  if (task.type === 'question')
    return (<div className="question">
              <Question type={task.questionKey} />
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
