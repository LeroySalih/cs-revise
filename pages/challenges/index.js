import Button from '@material-ui/core/Button'
import axios from 'axios';
import React, { useEffect, useState } from "react";

const ChallengesIndex = () => {

  const [msg, setMsg] = useState('');

  const handleSendApiCall = async () => {
    console.log('Api Call Simulated');

    const resp = await axios.post('/api/challenge/leroy/1',
    {
      'main': `#This is the challenge file
print("Hello World")`
    });

    setMsg(resp.data)
  }

  return <div className="container">
          <h1>This is the Challenges Index Page</h1>
          <a href="https://gitpod.io/#CHALLENGE_ID=1,CHALLENGE_TITLE=Learning_Lists/https://github.com/LeroySalih/python-base">Link to Challenge 1</a>
          <pre>{JSON.stringify(msg, null, 2)}</pre>
        </div>
}


export default ChallengesIndex;