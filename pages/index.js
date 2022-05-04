import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import {connectToDatabase} from '../utils/mongodb';
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";

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
        <title>CS Revise</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          Welcome to CS Revise {identity && identity.name}💻
        </h1>
        
        <div>
          <button onClick={handleUpdateIdentity}></button>
        </div>

        <p className={styles.description}>
          Get started by visiting a topic below.{' '}<img src='/images/tick.svg' alt="next"/>
        </p>

        <div className={styles.grid}>
          {data && data.map((t, i) => (
            <Link className="heading-link" key={i} href={`/modules/${t._id}`} > 
              <div className={styles.card}>
              <h3>{t.title} &rarr;</h3>
              <div dangerouslySetInnerHTML={{__html: t.description}}></div>
              </div>
            </Link>
          ))}

        </div>
      </main>

      <footer className={styles.footer}>
        <div>mr-salih.co.uk</div>
        <div>Clientid: {process.env.NEXT_PUBLIC_GOOGLE_CLIENT_KEY}</div>
      </footer>
      <style jsx>{`
        heading-link {
          cursor: pointer;
        }
      `}
      </style>
    </div>
  )
}

export async function getStaticProps (context) {

  
  const {NEXT_PUBLIC_GOOGLE_CLIENT_KEY} = process.env;

  console.log("Google Key", NEXT_PUBLIC_GOOGLE_CLIENT_KEY)
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
      description: 1})
      .toArray();

  return {
    props: {
      data: JSON.parse(JSON.stringify(topics))
    }
  }

}



