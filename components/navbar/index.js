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
    <div className="navbar">
      <div className="siteHeading">
        <Link href="/">CS Revise</Link>
      </div>
      <div className="userOPtions">
        
        {identity && identity.provider == 'google' && (

          <GoogleLogout
          clientId={GOOGLE_CLIENT_ID}
          buttonText="Sign Out"
          onLogoutSuccess={handleGoogleSignOut}
          >
          </GoogleLogout>
        )}
        
        { !identity && <div>
          
          <GoogleLogin
          //mrsalih project on google platform
          clientId={GOOGLE_CLIENT_ID}
          buttonText="Login"
          onSuccess={handleGoogleSignInOK}
          onFailure={handleGoogleSignInFailed}
          cookiePolicy={'single_host_origin'}
        />  
        </div>
        }
        
      </div>
      
      
      
      <style jsx>{`

        .navbar {
          display: flex;
          background-color: silver;
          align-items: center;
          height: 4rem;
        }

        .siteHeading {
          flex:1;
          margin-left: 2rem;
        }

        .userOptions {

        }
      
      `}</style>
    </div>
  )
}

export default NavBar;