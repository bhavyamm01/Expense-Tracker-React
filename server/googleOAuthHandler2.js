import { getGoogleOAuthTokens } from "./getGoogleOAuthTokens.js";
import jwt from "jsonwebtoken";

export async function googleOAuthHandler2(req, res) {
  const code = req.query.code;
  console.log("code: ", code);
  try {
    const { id_token, access_token } = await getGoogleOAuthTokens({ code });
    console.log({ id_token, access_token });
    const googleUser = jwt.decode(id_token);
    console.log({ googleUser });
    res.send(googleUser);
  } catch (err) {
    console.error(err.message, "Failed to authorize google user");
    // throw new Error(err.message);
    res.send(err);
  }
}
