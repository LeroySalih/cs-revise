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


// mrsalih on google platform
const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_KEY

const NavBar = () => {    
  // console.log("Google Client Id", process.env.NEXT_PUBLIC_GOOGLE_CLIENT_KEY)
  const { instance, accounts } = useMsal();
  
  const {identity, setIdentity} = useContext(IdentityContext);
  // const account = useAccount(accounts[0] || {});
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const DEV = true;

  const { signOut, loaded } = useGoogleLogout({
    clientId: GOOGLE_CLIENT_ID
  })

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

  return (
    <>
    
    
    <AppBar position="sticky">
        <Toolbar>
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <img src="/images/mr-salih-logo.png" id="logo"></img>
          <div className="appBarTitle" variant="h6" component="div">
            mrsalih.co.uk
          </div>
          {identity && identity.provider == 'google' && (

            <GoogleLogout
              clientId={GOOGLE_CLIENT_ID}
              buttonText="Sign Out"
              onLogoutSuccess={handleGoogleSignOut}
            >
            </GoogleLogout>
          )}

          {identity && identity.provider == 'ms' && (

          <Button variant="outlined" startIcon={<Avatar src="/images/ms-logo.png"/>} onClick={handleMicrosoftSignOut}>
          Sign out with Microsoft
          </Button>
          )}

          {!identity && 
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
        </Toolbar>
      </AppBar>
      <style jsx>{`

        .appBarTitle{
          display: flex;
          flex-grow: 1;
          font-family: 'Poppins', sans-serif;
          font-size: 1.7rem;
          font-weight: bold;
        }

        #logo {
          width : 50px;
          height: 50px;
          margin-right: 1rem;
        }

        
      
      `}</style>
    </>

  )
}

export default NavBar;