import axios from "axios";
import qs from "qs";

export async function getGoogleOAuthTokens({ code }) {
  const url = "https://oauth2.googleapis.com/token";

  const values = {
    code,
    client_id:
      "598165447701-2juuugp57c6molr9h65q524f2ggectji.apps.googleusercontent.com",
    client_secret: "<aman_secret_key>",
    redirect_uri: "http://localhost:3000/login/sso",
    grant_type: "authorization_code",
  };

  //   console.log(code, "code outside try block");
  //   console.log(qs.stringify(values), "get google oauth tokens");

  try {
    // console.log(qs.stringify(values), "values inside try block");
    const res = await axios.post(url, qs.stringify(values), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    // console.log(res, "res inside try block");
    return res.data;
  } catch (error) {
    console.error(error, "Failed to fetch google auth tokens");
    throw new Error(error);
  }
}
