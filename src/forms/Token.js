const TOKEN_KEY = "__token_key";

export default class Token {
  static retrieveToken() {
    let local = new Storage("local", TOKEN_KEY);
    let session = new Storage("session", TOKEN_KEY);
    if (!local.isEmpty()) {
      return Token.newToken(local.getValue(), true, false);
    } else if (!session.isEmpty()) {
      return Token.newToken(session.getValue(), false, false);
    }

    return Token.newToken(); // empty token, expired by default
  }
}
