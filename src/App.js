import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";

function LoginSSO() {
  let url = window.location.href;
  const queryString = window.location.search;
  console.log(queryString);
  const urlParams = new URLSearchParams(queryString);
  let [data, setData] = useState(null);
  const code = urlParams.get("code");
  console.log(code);

  useEffect(() => {
    axios
      .get("http://localhost:8080/auth/login", {
        params: {
          code: code,
        },
      })
      .then((data) => {
        console.log(data);
        setData(data.data.email);
      });
  }, [code]);

  return (
    <div style={{ padding: "1rem 0" }}>
      <h2>{data ? data : "Loading"}</h2>
    </div>
  );
}

function LoginForm() {
  // Opens Consent Form
  function getGoogleOAuthURL() {
    const rootUrl = "https://accounts.google.com/o/oauth2/v2/auth";

    const options = {
      redirect_uri: "http://localhost:3000/login/sso",
      client_id:
        "598165447701-2juuugp57c6molr9h65q524f2ggectji.apps.googleusercontent.com",
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

  return (
    <div>
      <a href={getGoogleOAuthURL()}>Login</a>
    </div>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login/sso" element={<LoginSSO />} />
        <Route path="/" element={<LoginForm />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
