import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import {connectToDatabase} from '../utils/mongodb';
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import Button from '@material-ui/core/Button';

import {IdentityContext} from "../src/context/identity";
import {useContext} from 'react'
export default function Home({data}) {

  

  const {identity, setIdentity} = useContext(IdentityContext);

  const handleUpdateIdentity = () => {
    setIdentity({name:"New User!"})
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Revise Computer Science :: mrsalih.co.uk</title>
        <link rel="icon" href="/images/mr-salih-logo.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          Computer Science Revision {identity && identity.name}💻
        </h1>
  
        <p className={styles.description}>
          Get started by visiting a topic below.{' '}
        </p>

        <div className={styles.grid}>
        {data && data.map((t, i) => (
            
            <div  key={i} className={styles.card}>
              <Link className="heading-link"  href={`/modules/${t._id}`} >   
                <h3>{t.title} &rarr;</h3> 
              </Link>
            
                 
                {t.headerImg && (
                  
                    <img className="headerImg" src={`/images/${t.headerImg}`} ></img>
                  
                )
                }

                <div style={{display:'none'}} dangerouslySetInnerHTML={{__html: t.description}}></div>

                <Link className="heading-link"  href={`/modules/${t._id}`} >
                  <Button variant="contained">Revise</Button>
                </Link>

            </div>
          
                      ))}

        </div>
      </main>

      <footer className={styles.footer}>
        <div>mrsalih.co.uk</div>
      </footer>
      <style jsx>{`
        .heading-link {
          cursor: pointer;
        }

        .headerImg{
          width: 300px;
          height: 190px;
        }
      `}
      </style>
    </div>
  )
}

export async function getStaticProps (context) {

  const { client, db } = await connectToDatabase()

  const isConnected = await client.isConnected() // Returns true or false

  const topics = await db.collection('modules')
    .find({status : "published"}, {sort: "order"})
    .project(
    {_id:1, 
      tags: 1, 
      title: 1, 
      metaDescription: 1, 
      order: 1, 
      headerImg: 1,
      description: 1})
      .toArray();

  return {
    props: {
      data: JSON.parse(JSON.stringify(topics))
    }
  }

}



