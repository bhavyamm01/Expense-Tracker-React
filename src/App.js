import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
// import AddNewTransaction from "./components/AddNewTransaction/AddNewTransaction";
// import Amount from "./components/Amount/Amount";
// import History from "./components/History/History";
// import { GlobalProvider } from "./GlobalContext";

// import { GoogleLogin, GoogleLogout } from "react-google-login";

// import { useGoogleLogin } from "react-google-login";

// import { gapi } from "gapi-script";

// function App() {
//   useEffect(() => {
//     function start() {
//       gapi.client.init({
//         clientId:
//           "469592621455-i547q23o1a4ro9l92ipsnanlebp444hu.apps.googleusercontent.com",
//         scope: "",
//       });
//     }
//     gapi.load("client:auth2", start);
//   });

//   const responseGoogle = (res) => {
//     console.log(res);
//     console.log(res.profileObj);
//   };

//   const onLogoutSuccess = () => {
//     console.log("Log out successful");
//   };

//   const { signIn } = useGoogleLogin({
//     onSuccess: responseGoogle,
//     onFailure: responseGoogle,
//     clientId:
//       "469592621455-i547q23o1a4ro9l92ipsnanlebp444hu.apps.googleusercontent.com",
//     isSignedIn: true,
//     accessType: "offline",
//   });
//   return (
//     <div>
//       {/* <button onClick={signIn}>
//         <span>Sign in with google</span>
//       </button> */}

//       <GoogleLogout
//         clientId="469592621455-i547q23o1a4ro9l92ipsnanlebp444hu.apps.googleusercontent.com"
//         buttonText="Logout"
//         onLogoutSuccess={onLogoutSuccess}
//       />
//       <GoogleLogin
//         clientId="469592621455-i547q23o1a4ro9l92ipsnanlebp444hu.apps.googleusercontent.com"
//         buttonText="Login"
//         onSuccess={responseGoogle}
//         onFailure={responseGoogle}
//         cookiePolicy={"single_host_origin"}
//       />
//     </div>
//     // <GlobalProvider>
//     //   <div className="container">
//     //     <h2>Expense Tracker</h2>
//     //     <Amount />
//     //     <History />
//     //     <AddNewTransaction />
//     //   </div>
//     // </GlobalProvider>
//   );
// }

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

    axios
      .post("http://localhost:8080/api/google", {
        code: code,
      })
      .then((res) => console.log(res, "res from useEffect"))
      .catch((error) => console.error(error));
  }, [code]);

  return (
    <div>
      <a href={getGoogleOAuthURL()}>Login</a>
    </div>
  );
};

export default App;
