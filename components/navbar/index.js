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
import MenuIcon from '@material-ui/icons/Menu';

// mrsalih on google platform
const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_KEY

const NavBar = () => {    
  console.log("Google Client Id", process.env.NEXT_PUBLIC_GOOGLE_CLIENT_KEY)
  const { instance, accounts } = useMsal();
  
  const {identity, setIdentity} = useContext(IdentityContext);
  const account = useAccount(accounts[0] || {});
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const DEV = true;

  const { signOut, loaded } = useGoogleLogout({
    clientId: GOOGLE_CLIENT_ID
  })

  const handleLogin = (loginType) => {
    
    setAnchorEl(null);

    instance.loginPopup(loginRequest);
    if (loginType === "popup") {
        instance.loginPopup(loginRequest);
    } else if (loginType === "redirect") {
        instance.loginRedirect(loginRequest);
    }
  }

  const handleLogout = () => {
    instance.logout();
  }

  // if MS Accoutn changes
  useEffect(() => {

  }, [account])

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

  return (
    <>
    
    <AppBar position="static">
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

          {!identity && 

          <GoogleLogin
          //mrsalih project on google platform
            clientId={GOOGLE_CLIENT_ID}
            buttonText="Login"
            onSuccess={handleGoogleSignInOK}
            onFailure={handleGoogleSignInFailed}
            cookiePolicy={'single_host_origin'}
          />  

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

        
      
      `}</style>
    </>

  )
}

export default NavBar;