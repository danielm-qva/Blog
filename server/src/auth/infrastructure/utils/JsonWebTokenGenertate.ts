import jwt from "jsonwebtoken";

export const JWT_SECRETE = " asdq312qwecc$$^&**@(W)@www3gbt";

export class JsonWebTokenGenerate {
  email: string;
  name: string;

  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }

  GenereateToken() {
    return jwt.sign({ email: this.email, name: this.name }, JWT_SECRETE);
  }

  VerifiToken(token: string) {
    return jwt.verify(token, JWT_SECRETE);
  }
}
