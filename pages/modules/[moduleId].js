import {connectToDatabase} from '../../utils/mongodb';

import Head from 'next/head';
import Link from 'next/link';
import { lazy } from 'react';

import {QuestionContext} from '../../components/question';
import Lesson from '../../components/lesson';


import Question from '../../components/question';

import { useIntersection } from '../../hooks/useIntersection';
import {useState} from 'react';
import { SettingsInputSvideo } from '@material-ui/icons';

const ModulePage = ({module, questions}) => {

  const [visible, setVisible] = useState(null);

  const handleIsVisibleChange = (title, v) => {
    if (v){
      setVisible(title);
    }
  }  
  if (!module)
    return `<div>No Module Found</div>`

  return (
    <QuestionContext.Provider value={{questions}}>
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
              <a href={`#${l._id}`} className={`${l.title == visible ? 'visible' : ''}`}>{l.title}</a>
            </div>
          )
          )}
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