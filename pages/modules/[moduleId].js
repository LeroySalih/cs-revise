import {connectToDatabase} from '../../utils/mongodb';

import Head from 'next/head';
import Link from 'next/link';
import { lazy } from 'react';

import Task from '../../components/task';
import Question from '../../components/question';

const ModulePage = ({module}) => {
  return (
    <div className="container">
      <Head>
        <title>{module && module.title}</title>
      
      </Head>
      <h1>
        <Link href="/">Home</Link>&nbsp;&gt;&nbsp;{module && module.title}
      </h1>
      <div className="moduleDescription">
          
          {module && module.description}
      </div>

      <div className="pageGrid">
        <div className="sideBar">
          {module && Object.values(module.lessons).map((l, i) => (
            <div key={i} className="sideMenuItem">
              <a href={`#${l._id}`}>{l.title}</a>
            </div>
          )
          )}
        </div>
        <div className="mainPage">
          {
            module && Object.values(module.lessons).map((l, i) => (
              <div key={i}>
                <a name={l._id}></a>
                <h2><img src="/images/youtube.png" width="2rem" />{l.title}</h2> 
                <div>{l.desc}</div>
                <div className="linksToSpec">
                  <h3>Links to Spec</h3>
                  <div dangerouslySetInnerHTML={{__html: l.specDesc}}></div>
                </div>
                <div>{l.tasks && Object.values(l.tasks).map((t, ti) => (
                  <div key={ti}>
                    <Task task={t}></Task>
                  </div>
                )) 
                }</div>
              </div>
            ))
          }
        </div>
      </div>
      <style jsx>{`
      
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
          background-color: #fafafa;
          border: 1px solid silver;
          border-radius: 10px;
          margin-top: 15px;

        }

        .mainPage {
          height: calc(100vh - 14rem);
          overflow-y: auto;
          scroll-behavior: smooth;
        }

        .linksToSpec {
          background-color: #f0f0f0;
          padding: 10px;
          margin: 10px;
          border: silver 1px solid;
          border-radius: 5px;
        }

        .sideMenuItem {
          padding: 10px;
          font-size: 0.8rem;
        }

      `}</style>

    </div>
    )
}

// fetch data from db
export async function getStaticProps (context) {
  const {params} = context;
  const {moduleId} = params; 

  const {db} = await connectToDatabase();

  const module = await db.collection('modules').findOne({_id: moduleId});

  return {
    props: {
      module: module
    }
  }
}

export async function getStaticPaths (){

  const {db} = await connectToDatabase();

  const modules = await db.collection('modules').find({}).toArray();

  const paths = modules.map((module) => ({params: {moduleId: module._id}}))
  return {
    fallback: true,
    paths
  }
}

export default ModulePage;