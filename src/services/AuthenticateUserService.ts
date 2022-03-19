import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UserRepositories";

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    const userToAuthenticate = await usersRepositories.findOne({ email });

    if (!userToAuthenticate) {
      throw new Error("Email/Password incorrect");
    }

    const isPasswordMatch = await compare(
      password,
      userToAuthenticate.password
    );

    if (!isPasswordMatch) {
      throw new Error("Email/Password incorrect");
    }

    const tokenJwt = sign(
      {
        email: userToAuthenticate.email,
      },
      "ae365829bae78051232239c526e7687f",
      {
        subject: userToAuthenticate.id,
        expiresIn: "1d",
      }
    );

    return tokenJwt;
  }
}

export { AuthenticateUserService };
