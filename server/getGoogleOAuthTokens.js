import axios from "axios";
import qs from "qs";

export async function getGoogleOAuthTokens(code) {
  const url = "https://oauth2.googleapis.com/token";

  const values = {
    code: code,
    client_id:
      "469592621455-i547q23o1a4ro9l92ipsnanlebp444hu.apps.googleusercontent.com",
    client_secret: "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",
    redirect_uri: "http://localhost:3000/login/sso",
    grant_type: "authorization_code",
  };

  //   console.log(code, "get google oauth tokens");
  console.log(qs.stringify(values), "get google oauth tokens");

  try {
    const res = await axios.post(url, qs.stringify(values), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    console.log(res, "res get google oauth tokens");
    return res.data;
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
}
