import Video from './video';

const Task = ({task}) => {
  
  if (!task)
    return (<></>);

  if (task.type === 'video')
    return <Video task={task}/>

  return <div>Unknown Task Type</div>
}

export default Task
