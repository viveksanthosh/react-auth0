import auth0 from "auth0-js";

class Auth {
  constructor() {
    this.auth = new auth0.WebAuth({
      domain: "dev-vivek-react-test-1.auth0.com",
      clientID: "V070DVVaS6tIL2bbhU1iJ3tEAUAiGsTR",
      redirectUri: "http://localhost:3000/callback",
      responseType: "token id_token",
      scope: "openid profile email"
    });
  }

  login = () => {
    this.auth.authorize();
  };

  verify = () =>
    new Promise((res, rej) => {
      this.auth.parseHash((err, result) => {
        if (err) {
          rej(err);
        }
        console.log(result)
      });
    });
}

export default Auth;
