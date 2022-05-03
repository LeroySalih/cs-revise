import '../styles/globals.css'
import Navbar from '../components/navbar';
import {useEffect} from 'react';
import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "../src/authConfig";

import {IdentityContext} from '../src/context/identity';
import {useState} from 'react';

// https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/samples/msal-react-samples/nextjs-sample/src

function MyApp({ Component, pageProps }) {
  const msalInstance = new PublicClientApplication(msalConfig);

  const [identity, setIdentity] = useState(null);

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return ( 
    <> 
      <IdentityContext.Provider value={{identity, setIdentity}}>
        <MsalProvider instance={msalInstance}>
          <Navbar/>
          <Component {...pageProps} /> 
        </MsalProvider>
      </IdentityContext.Provider>
    </>
  )
}

export default MyApp
