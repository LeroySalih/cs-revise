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
          <Button variant="contained" color="primary" onClick={handleSendApiCall}>
              Test
          </Button>
          <pre>{JSON.stringify(msg, null, 2)}</pre>
        </div>
}


export default ChallengesIndex;