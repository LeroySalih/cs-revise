
import Task from '../task';
import { useIntersection } from 'use-intersection';
import {useRef, useEffect} from 'react';

const Lesson = ({lesson, onIsVisible}) => {

    const target = useRef(null);
    const isIntersecting = useIntersection(target);

    useEffect(()=> {
        // console.log(lesson.title, isIntersecting)
        onIsVisible(lesson.title, isIntersecting)
    }, [isIntersecting])
    

    return (<div ref={target}>
        <a name={lesson._id}></a>
        <h2 >
            <img src="/images/youtube.png" width="2rem" />{lesson.title}</h2> 
        <div>{lesson.desc}</div>
        
        <div>{lesson.tasks && Object.values(lesson.tasks).map((t, ti) => (
          <div key={ti}>
            <Task task={t}></Task>
          </div>
        )) 
        }</div>
        <style jsx>{`

            .linksToSpec {
                background-color: #f0f0f0;
                padding: 10px;
                margin: 10px;
                border: silver 1px solid;
                border-radius: 5px;
            }

        `}</style>
      </div>)
}

export default Lesson;