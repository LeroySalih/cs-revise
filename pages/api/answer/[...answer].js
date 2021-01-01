import {connectToDatabase} from '../../../components/mongodb';

export default async function handler(req, res) {
    const {
        query: {answer} 
    } = req;

    // check if the request is from a valid user.
    // log to a db.

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

    console.log(answer)
    res.json({answer, topics });

}