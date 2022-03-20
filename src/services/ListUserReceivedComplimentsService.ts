import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";

class ListUserReceivedComplimentsService {
  async execute(user_id: string) {
    const complimentsRepositories = getCustomRepository(
      ComplimentsRepositories
    );

    const compliments = complimentsRepositories.find({
      where: {
        userReceiver: user_id,
      },
    });
  }
}

export { ListUserReceivedComplimentsService };
