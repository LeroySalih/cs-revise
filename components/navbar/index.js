import * as Msal from "@azure/msal-browser";
import Link from 'next/link';
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import React from 'react';

import { loginRequest } from "../../src/authConfig";
import { SignInButton, SignOutButton } from '../../src/ui';

const NavBar = () => {    
  const { instance } = useMsal();
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const DEV = false;

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

  return (
    <div className="navbar">
      <div className="siteHeading">
        <Link href="/">CS Revise</Link>
      </div>
      <div className="userOPtions">
        <AuthenticatedTemplate>
          <SignOutButton />
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
          { DEV && <SignInButton />}
        </UnauthenticatedTemplate>
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