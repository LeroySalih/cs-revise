import { useMsalAuthentication, useMsal, useAccount, AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";

import { loginRequest } from "../src/authConfig";
import React, { useEffect, useState } from "react";
import { ProfileData } from "../src/ProfileData";
import { callMsGraph } from "../src/MsGraphApiCall";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";

const ProfileContent = () => {
    const { instance, accounts } = useMsal();
    
    const account = useAccount(accounts[0] || {});
    
    const [graphData, setGraphData] = useState(null);
  
    function requestProfileData() {
        
        if (account) {
          instance.acquireTokenSilent({
            scopes: ["user.read"],
            account: account
        }).then((response) => {
            callMsGraph(response.accessToken).then(response => setGraphData(response));
        }).catch((e) => console.error('Error:', e.message, account ))
        }
        
    }

    useEffect(() => {
        requestProfileData();
    }, [account]);
  
    return (
        <Paper>
            { graphData ? <ProfileData graphData={graphData} /> : null }
        </Paper>
    );
};

const ErrorComponent = ({error}) => {
    return <Typography variant="h6">An Error Occurred: {error.errorCode}</Typography>;
}

const Loading = () => {
    return <Typography variant="h6">Authentication in progress...</Typography>
}

export default function Profile() {
    
    const {login, result, error} = useMsalAuthentication("popup");

    return (
      <>
      <AuthenticatedTemplate>
        <ProfileContent />
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <p>No users are signed in!</p>
      </UnauthenticatedTemplate>
        </>    
        
      )
};