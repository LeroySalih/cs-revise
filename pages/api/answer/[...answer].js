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

    // console.log(answer)

    const [email, questionKey, index, result] = answer;

    const { client, db } = await connectToDatabase()

    const isConnected = await client.isConnected() // Returns true or false

    // add to database
    const data = await db.collection('answers')
                              .insertOne({email, questionKey, index, result, createdOn: moment().format("YYYY-MM-DD HH-mm-s-SSS")});

    const update = await db.collection('answers')
                              .find({
                                email: email, 
                                questionKey: questionKey,
                                
                              }).toArray();

    
    const correct = update.reduce((acc, curr) => {
      if (curr.result == 'true') {
        acc += 1
      }
      return acc;
    }, 0)
    
    // console.log('Correct', update.length, correct);

    // console.log(answerObj.ts, 'Answer Object: ', answerObj, result)
    res.json({status: true, msg: "Answer Submitted", count: update.length, correct});

}