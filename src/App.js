import React, { useEffect } from "react";
import "./App.css";
import AddNewTransaction from "./components/AddNewTransaction/AddNewTransaction";
import Amount from "./components/Amount/Amount";
import History from "./components/History/History";
import { GlobalProvider } from "./GlobalContext";

import { GoogleLogin, GoogleLogout } from "react-google-login";

import { useGoogleLogin } from "react-google-login";

import { gapi } from "gapi-script";

function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId:
          "469592621455-i547q23o1a4ro9l92ipsnanlebp444hu.apps.googleusercontent.com",
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });

  const responseGoogle = (res) => {
    console.log(res);
    console.log(res.profileObj);
  };

  const onLogoutSuccess = () => {
    console.log("Log out successful");
  };

  const { signIn } = useGoogleLogin({
    onSuccess: responseGoogle,
    onFailure: responseGoogle,
    clientId:
      "469592621455-i547q23o1a4ro9l92ipsnanlebp444hu.apps.googleusercontent.com",
    isSignedIn: true,
    accessType: "offline",
  });
  return (
    <div>
      {/* <button onClick={signIn}>
        <span>Sign in with google</span>
      </button> */}

      <GoogleLogout
        clientId="469592621455-i547q23o1a4ro9l92ipsnanlebp444hu.apps.googleusercontent.com"
        buttonText="Logout"
        onLogoutSuccess={onLogoutSuccess}
      />
      <GoogleLogin
        clientId="469592621455-i547q23o1a4ro9l92ipsnanlebp444hu.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
    // <GlobalProvider>
    //   <div className="container">
    //     <h2>Expense Tracker</h2>
    //     <Amount />
    //     <History />
    //     <AddNewTransaction />
    //   </div>
    // </GlobalProvider>
  );
}

export default App;
