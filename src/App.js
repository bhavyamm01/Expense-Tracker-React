import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

// Opens Consent Form
function getGoogleOAuthURL() {
  const rootUrl = "https://accounts.google.com/o/oauth2/v2/auth";

  const options = {
    redirect_uri: "http://localhost:8080/auth/login",
    client_id:
      "469592621455-i547q23o1a4ro9l92ipsnanlebp444hu.apps.googleusercontent.com",
    access_type: "offline",
    response_type: "code",
    prompt: "consent",
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ].join(" "),
  };

  const qs = new URLSearchParams(options);

  return `${rootUrl}?${qs.toString()}`;
}

const App = () => {
  return (
    <div>
      <a href={getGoogleOAuthURL()}>Login</a>
    </div>
  );
};

export default App;
