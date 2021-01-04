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
  Return a list of all challenges
*/
export default async function handler(req, res) {

    // Run cors
    await cors(req, res)

    console.log('Running API call::challenges')


    if (req.method !== 'GET'){
        res.json({status: 'ERROR', msg: "Incorrect message format"})
        console.error('Incorrect message format')
        return;
    }

    const { client, db } = await connectToDatabase()

    const isConnected = await client.isConnected() // Returns true or false

    const result = await db.collection('challenges')
        .find({})
        .project({_id:1, title:1, desc: 1})
        .toArray()
      
    res.json({status: true, result});

}