import {connectToDatabase} from '../../../components/mongodb';
import moment from 'moment';

import Cors from 'cors'
import initMiddleware from '../../../src/init-middleware';

// Initialize the cors middleware
const cors = initMiddleware(
    // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
    Cors({
      // Only allow requests with GET
      methods: ['GET' ],
    })
  )
  

/*
  Read a challenge from the DB and send it to the client 
*/
export default async function handler(req, res) {

    // Run cors
    await cors(req, res)

    console.log('Running API call')

    const {
        query: {challenge} 
    } = req;

    const {body} = req;


    if (challenge.length !== 1 || req.method !== 'GET'){
        res.json({status: 'ERROR', msg: "Incorrect message format"})
        console.error('Incorrect message format')
        return;
    }

    console.log("Looking for:", challenge[0])

    // check if the request is from a valid user.
    // log to a db.

    const { client, db } = await connectToDatabase()

    const isConnected = await client.isConnected() // Returns true or false

    const result = await db.collection('challenges')
        .findOne({})
      

    console.log(moment().format('yyyy-mm-DD-hh:mm:ss-SSSS'), 'Result: ', result)
    res.json({status: result.ok === 1, msg: result});

}