import {useDrag} from 'react-dnd';


const Item = ({id, text}) => {

  const [collectedProps, drag] = useDrag({
    item: {id, type:"Item"}
  })
  return <div ref={drag}>{text}</div>
}

export default Item;