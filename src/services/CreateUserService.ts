import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UserRepositories";

interface IUserRequest {
  admin: boolean;
  email: string;
  name: string;
}

class CreateUserService {
  async execute({ admin, email, name }: IUserRequest) {
    const userRepository = getCustomRepository(UsersRepositories);

    if (!email) {
      throw new Error("Incorrect E-mail");
    }

    const userAlreadyExists = await userRepository.findOne({
      email,
    });

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const user = userRepository.create({
      admin,
      email,
      name,
    });

    await userRepository.save(user);
    return user;
  }
}

export { CreateUserService };
