import Button from '@material-ui/core/Button'
import axios from 'axios';
import React, { useEffect, useState } from "react";

import { useMsalAuthentication, useMsal, useAccount, AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";


const ChallengesIndex =  () => {

  const [msg, setMsg] = useState('');
  const [challenges, setChallenges] = useState(null);

  const { instance, accounts } = useMsal();

  // const {username} = accounts[0]
  // console.log(instance, accounts && accounts[0])

  useEffect(async ()=> {
    const res = await axios.get('/api/challenges');
    console.log(res.data)
    setChallenges(res.data.result)
  }, [])
  

  return <div className="container">
          <h1>This is the Challenges Index Page </h1>
          
          {challenges && challenges.map((c, i) => (<div>
            <a key={i} href={`https://gitpod.io/#EMAIL=,CHALLENGE_ID=${c._id},CHALLENGE_TITLE=${c.title},EMAIL=sleroy@bisak.org/https://github.com/LeroySalih/python-base`}>{c.title}</a>
            <div>{c.desc}</div>
          </div>) )}
        </div>
}


export default ChallengesIndex;