import * as Msal from "@azure/msal-browser";
import Link from 'next/link';
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { useIsAuthenticated, useMsal, useAccount } from "@azure/msal-react";
import React from 'react';

import { loginRequest } from "../../src/authConfig";
// import { SignInButton, SignOutButton } from '../../src/ui';

import { GoogleLogin, GoogleLogout, useGoogleLogout } from 'react-google-login';

import { IdentityContext } from "../../src/context/identity";
import { useContext, useState, useEffect} from 'react'; 


import { AppBar, Box, Toolbar, Typography, Button, IconButton,  } from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';

import MenuIcon from '@material-ui/icons/Menu';
import { useRouter } from 'next/router'

const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_KEY

const SignIn = () => {

     // console.log("Google Client Id", process.env.NEXT_PUBLIC_GOOGLE_CLIENT_KEY)
  const { instance, accounts } = useMsal();
  const router = useRouter();
  
  const {identity, setIdentity} = useContext(IdentityContext);
  // const account = useAccount(accounts[0] || {});
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const DEV = true;

  const { signOut, loaded } = useGoogleLogout({
    clientId: GOOGLE_CLIENT_ID
  });

  const handleLogin = () => {
    
    
    
  }

  const handleLogout = () => {
    instance.logout();
  }

  useEffect(() => {
    console.log("instance", instance);
    console.log("accounts", accounts);
    console.log("identity", identity);

    if (accounts && accounts.length){
      
      const account = accounts[0];

      if (!identity || (identity.email !== account.email && identity.provider !== 'ms')){
        setIdentity({
          name: account.name,
          email: account.username,
          provider: "ms"
        });
      }
      
    }
  }, [accounts])

  
    const handleGoogleSignInOK = (o) => {
        console.log("Google Sign In Received", o);
        setIdentity({
        email: o.profileObj.email, 
        name: o.profileObj.name, 
        provider: 'google'});
    }

    const handleGoogleSignInFailed = (o) => {
        console.log("Google Sign Failed", o);
    }

    const handleGoogleSignOut = (o) => {
        console.log("Google Signed Out", o);
        setIdentity(null);
    }

    const handleMicrosoftSignIn = async () => {
        setAnchorEl(null);

        const result = await instance.loginRedirect(loginRequest);

        if (result && result.account) {
        setIdentity(
            {
            name: result.account.name,
            email: result.account.username,
            provider: "ms"
            }
        )
        }
        console.log("MS Login Recieved:", result.account);
    }

    const handleMicrosoftSignOut = async () => {
        setAnchorEl(null);

        await instance.logout();

        setIdentity(null);
    }

    if (identity) {
        router.push('/');
    }

    return (
        <div className="container">
            <h1>Sign In</h1>
            <div>{!identity && 
            <>
            <GoogleLogin
            //mrsalih project on google platform
                clientId={GOOGLE_CLIENT_ID}
                buttonText="Login"
                onSuccess={handleGoogleSignInOK}
                onFailure={handleGoogleSignInFailed}
                cookiePolicy={'single_host_origin'}
            />  

            <Button variant="outlined" startIcon={<Avatar src="/images/ms-logo.png"/>} onClick={handleMicrosoftSignIn}>
                Sign in with Microsoft
            </Button>
            </>
            }
            </div>
        </div>    
        )
}


export default SignIn;