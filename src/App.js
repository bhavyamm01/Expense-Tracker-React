import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

// Opens Consent Form
function getGoogleOAuthURL() {
  const rootUrl = "https://accounts.google.com/o/oauth2/v2/auth";

  const options = {
    redirect_uri: "http://localhost:3000/login/sso",
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
  const [code, setCode] = useState("");

  useEffect(() => {
    let url = window.location.href;
    setCode(url.split("code=")[1]);
    console.log(code, "code");

    // axios
    //   .post("http://localhost:8080/api/google", {
    //     code: code,
    //   })
    //   .then((res) => console.log(res, "res from useEffect"))
    //   .catch((error) => console.error(error));

    axios.get("http://localhost:8080/api/google", {
      params: {
        code: code,
      },
    });
  }, [code]);

  return (
    <div>
      <a href={getGoogleOAuthURL()}>Login</a>
    </div>
  );
};

export default App;
