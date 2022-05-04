// Config object to be passed to Msal on creation
export const msalConfig = {
    auth: {
        clientId: "882e3a11-c570-4809-b45d-7f3256e88259",
        redirectUri: "https://3000-leroysalih-csrevise-vjalcrw6hd7.ws-eu43.gitpod.io/",
        postLogoutRedirectUri: "https://3000-leroysalih-csrevise-vjalcrw6hd7.ws-eu43.gitpod.io/"
    }
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const loginRequest = {
    scopes: ["User.Read"]
};

// Add here the endpoints for MS Graph API services you would like to use.
export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
};