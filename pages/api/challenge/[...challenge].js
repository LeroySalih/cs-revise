import {connectToDatabase} from '../../../components/mongodb';
import moment from 'moment';

export default async function handler(req, res) {


    const {
        query: {challenge} 
    } = req;

    const {body} = req;

    

    if (challenge.length !== 2 || req.method !== 'POST'){
        res.json({status: 'ERROR', msg: "Incorrect message format"})
        return;
    }

    // construct the data to be written to the database
    const challengeSubmission = {
        user: challenge[0],
        challengeId: challenge[1],
        time: moment().format('yyyy-mm-DD-hh:mm:ss-SSSS'),
        ...body
    }
        

    // check if the request is from a valid user.
    // log to a db.

    const { client, db } = await connectToDatabase()

    const isConnected = await client.isConnected() // Returns true or false

    const {result} = await db.collection('challenges')
        .insertOne(challengeSubmission)
      

    console.log(moment().format('yyyy-mm-DD-hh:mm:ss-SSSS'), result.ok)
    res.json({status: result.ok === 1, msg: "Challenge Submitted"});

}