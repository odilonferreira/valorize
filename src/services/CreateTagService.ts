import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";

interface IRequestTag {
  name: string;
}

class CreateTagService {
  async execute({ name }: IRequestTag) {
    const tagsRepositories = getCustomRepository(TagsRepositories);

    if (!name) {
      throw new Error("Incorrect name");
    }

    const tagAlreadyExists = await tagsRepositories.findOne({
      name,
    });

    if (tagAlreadyExists) {
      throw new Error("Tag already exists");
    }

    const newTag = tagsRepositories.create({
      name,
    });

    await tagsRepositories.save(newTag);
    return newTag;
  }
}

export { CreateTagService };
