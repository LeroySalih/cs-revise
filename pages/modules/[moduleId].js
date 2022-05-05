import {connectToDatabase} from '../../utils/mongodb';

import Head from 'next/head';
import Link from 'next/link';
import { lazy, useContext } from 'react';

import {QuestionContext} from '../../components/question';
import Lesson from '../../components/lesson';


import Question from '../../components/question';

import { useIntersection } from '../../hooks/useIntersection';
import {useState, useEffect} from 'react';
import { SettingsInputSvideo } from '@material-ui/icons';
import DisplaySession  from '../../components/display-session';
import Button from '@mui/material/Button';
import { IdentityContext } from '../../src/context/identity';

const ModulePage = ({module, questions}) => {

  const [visible, setVisible] = useState(null);
  const [session, setSession] = useState(null);
  const [answers, setAnswers] = useState(0);
  const {identity} =useContext(IdentityContext);


  
  useEffect(()=> {
    console.log("Questions changed")
    setSession(createSession(questions))
  }, [questions]);

  

  const createSession = (q) => {
    
    if (!q) return null;

    const test = {
      _id:1234,
      testKey:[1,2,3,4]
    }

    console.log("Questions", q, );
    console.log("Questions Keys", Object.keys(q) );
    const sesh = {}

    test && Object.keys(q).forEach(k => {
      if (k != '_id'){
        sesh[k] = Array.apply(null, Array(q[k].length)).map(a => null);
      }
    })
    
    console.log("Sesh", sesh);

    return sesh;
  }

  const getQuestionState = (key, index) => (session[key][index]);
  const setQuestionState = (key, index, state) => {
    setSession((prev) => { prev[key][index] = state; return prev});
  }


  const handleIsVisibleChange = (title, v) => {
    if (v){
      setVisible(title);
    }
  }
  
  const handleClearSession = () => {
    setSession(createSession(questions))
  }

  const calcCorrectPct = (lesson) => {
    if (!session || !answers) return '';

    const answers = session[lesson._id];
    
    const correct = answers.filter(a => a).length
    const pct = `${(correct / answers.length) * 100}%`

    return pct;
  }

  const countCorrectAnswers = () => {
    if (!session) return 0;
    const result = Object.values(session).map(k => k.filter(i => i == true).length).reduce((a,b) => a + b, 0)
    return result;
  }


  const calcCorrectPctModule = () => {
    if (countCorrectAnswers() == 0 || answers == 0) {
      return 0
    }

    return (countCorrectAnswers() / answers) * 100
  }

  const incAnswer = () => {
    setAnswers((prev) => prev + 1);

    if (identity){
      console.log(identity.email, calcCorrectPctModule)
    }
  }

  if (!module)
    return `<div>No Module Found</div>`

  return (
    <QuestionContext.Provider value={{questions, session, setSession, incAnswer}}>
    <div className="container">
      <Head>
        <title>{module && module.title}</title>
      
      </Head>
      <h1>
        <Link href="/">Home</Link>&nbsp;&gt;&nbsp;{module && module.title}
      </h1>
      <div className="moduleDescription" dangerouslySetInnerHTML={{__html: module.description}}>

      </div>

      <div className="pageGrid">
        <div className="sideBar">
          {module && Object.values(module.lessons).map((l, i) => (
            <div key={i} className="sideMenuItem">
              <a href={`#${l._id}`} className={`${l.title == visible ? 'visible' : ''}`}>
                {l.title} ({calcCorrectPct(l)})
              </a>
            </div>
          )
          )}
          <div>Correct Answers: {countCorrectAnswers()}</div>
          <div>Attempts:  {answers}</div>
          <div>Accuracy: {`${calcCorrectPctModule().toPrecision(2)}%`}</div>
          <Button onClick={handleClearSession}>Clear Answers</Button>
        </div>

        <div className="mainPage">
          {
            module && Object.values(module.lessons).map((l, i) => (
              <Lesson key={i} lesson={l} onIsVisible={handleIsVisibleChange}/>
            ))
          }
        </div>
      </div>
      <style jsx>{`

          .visible {
            color: red;
            font-weight: bold;
            text-decoration: underline;
          }

        .offSiteLink {
          color: blue;
        }
      
        h1 {
          font-family : 'Oswald'
        }

        div {
          font-family : 'Open Sans'
        }

        .pageGrid {
          display : grid;
          grid-gap: 2rem;
          grid-template-columns: 15rem auto;
        }

        .sideBar {
          
          border-right: 2px dotted silver;
          margin-top: 15px;

        }

        .mainPage {
          height: calc(100vh - 14rem);
          overflow-y: auto;
          scroll-behavior: smooth;
        }

        

        .sideMenuItem {
          padding: 10px;
          font-size: 0.8rem;
        }

      `}</style>

    </div>
    </QuestionContext.Provider>
    )
}

// fetch data from db
export async function getStaticProps (context) {
  const {params} = context;
  const {moduleId} = params; 

  const {db} = await connectToDatabase();

  const module = await db.collection('modules').findOne({_id: moduleId});

  const questions = await db.collection('questions').findOne({_id: moduleId});

  return {
    props: {
      module, questions
    }
  }
}

export async function getStaticPaths (){

  const {db} = await connectToDatabase();

  const modules = await db.collection('modules').find({status: "published"}).toArray();

  const paths = modules.map((module) => ({params: {moduleId: module._id}}))
  return {
    fallback: true,
    paths
  }
}

export default ModulePage;