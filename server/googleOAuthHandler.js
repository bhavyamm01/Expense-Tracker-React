import { getGoogleOAuthTokens } from "./getGoogleOAuthTokens.js";
import jwt from "jsonwebtoken";

export async function googleOAuthHandler(code) {
  //   const code = req.query.code;

  //   console.log(code, "google oauth handler");

  try {
    // console.log(req.query, "req");
    const { id_token, access_token } = await getGoogleOAuthTokens(code);
    console.log({ id_token, access_token });
    const googleUser = jwt.decode(id_token);
    console.log({ googleUser });
    res.cookie("token_id", id_token);
    return googleUser;
  } catch (err) {
    console.error(err.message, "Failed to authorize google user");
    throw new Error(err.message);
  }
}
