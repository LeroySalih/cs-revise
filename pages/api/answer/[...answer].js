import {connectToDatabase} from '../../../components/mongodb';
import moment from 'moment';

import Cors from 'cors'
import initMiddleware from '../../../src/init-middleware';

// Initialize the cors middleware
const cors = initMiddleware(
    // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
    Cors({
      // Only allow requests with GET, POST and OPTIONS
      methods: ['GET', 'POST', 'OPTIONS'],
    })
  )
  


export default async function handler(req, res) {

    // Run cors
    await cors(req, res)

    console.log('Running API call')
    
    const {
        query: {answer}  
    } = req;

    // const email = answer[0];
    // const id = answer[1];

    const {body} = req;

    

    //if (challenge.length !== 2 || req.method !== 'POST'){
    //    res.json({status: 'ERROR', msg: "Incorrect message format"})
    //    console.error('Incorrect message format')
    //    return;
    //}

    // construct the data to be written to the database
    //const challengeSubmission = {
    //    user: challenge[0],
    //    challengeId: challenge[1],
    //    time: moment().format('yyyy-mm-DD-hh:mm:ss-SSSS'),
    //    ...body
    // }
        

    // check if the request is from a valid user.
    // log to a db.

    // const { client, db } = await connectToDatabase()

    // const isConnected = await client.isConnected() // Returns true or false

    //const {result} = await db.collection('challenges')
    //    .insertOne(challengeSubmission)
      
    const challengeId = body.id; 
    const email = body.email;
    const results = JSON.parse(body.results);
    const successes = parseInt(body.successes);
    const fails = parseInt(body.fails);
    const progress = parseFloat(body.progress);
    const main = body.main

    const answerObj = {
      challengeId, email, results, successes, fails, progress, main, ts: moment().format('yyyy-mm-DD-hh:mm:ss-SSSS')
    };

    // check if the request is from a valid user.
    // log to a db.

    const { client, db } = await connectToDatabase()

    const isConnected = await client.isConnected() // Returns true or false

    // add to database
    const result = await db.collection('answers')
                            .updateOne({_id: email}, {$push : {[challengeId] : answerObj}}, {upsert: true});

    // console.log(answerObj.ts, 'Answer Object: ', answerObj, result)
    res.json({status: result.ok === 1, msg: "Answer Submitted"});

}