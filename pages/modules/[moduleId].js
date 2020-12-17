import {connectToDatabase} from '../../utils/mongodb';

import Head from 'next/head';
import { lazy } from 'react';

import Task from '../../components/task';

const ModulePage = ({module}) => {
  return (
    <div className="container">
      <Head>
        <title>{module && module.title}</title>
      
      </Head>
      <h1>{module && module.title}</h1>
      <div className="moduleDescription">{module && module.description}</div>

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
                <h2>{l.title}</h2> 
                <div>{l.desc}</div>
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
          grid-template-columns: 13rem auto;
        }

        .sideBar {
          background-color: silver;
        }

        .mainPage {
          height: calc(100vh - 14rem);
          overflow-y: auto;
          scroll-behavior: smooth;
        }

        .sideMenuItem {
          padding: 5px;
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