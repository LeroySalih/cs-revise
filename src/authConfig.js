// Config object to be passed to Msal on creation
export const msalConfig = {
    auth: {
        clientId: "5cd3bb3b-4b41-4e05-9e7a-71996c4032a7",
        redirectUri: "http://localhost:3000",
        postLogoutRedirectUri: "http://localhost:3000"
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