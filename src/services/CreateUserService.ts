import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UserRepositories";

interface IUserRequest {
  admin: boolean;
  email: string;
  name: string;
  password: string;
}

class CreateUserService {
  async execute({ admin, email, name, password }: IUserRequest) {
    const userRepository = getCustomRepository(UsersRepositories);

    if (!email) {
      throw new Error("Incorrect email");
    }

    const userAlreadyExists = await userRepository.findOne({
      email,
    });

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const passwordHash = await hash(password, 8);

    const user = userRepository.create({
      admin,
      email,
      name,
      password: passwordHash,
    });

    await userRepository.save(user);
    return user;
  }
}

export { CreateUserService };
