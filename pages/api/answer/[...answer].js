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
      
    const results = JSON.parse(body.results);
    const successes = parseInt(body.successes);
    const fails = parseInt(body.fails);
    const progress = parseFloat(body.progerss);
    const main = body.main

    const answerObj = {
        results, successes, fails, progress, main
    };

    console.log(moment().format('yyyy-mm-DD-hh:mm:ss-SSSS'), 'Answer Object: ', answerObj)
    res.json({status: 'OK', msg: "Challenge Submitted"});

}