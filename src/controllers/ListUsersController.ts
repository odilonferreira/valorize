import { Request, Response } from "express";
import { ListUsersService } from "../services/ListUsersService";

class ListUsersController {
  async handle(request: Request, response: Response) {
    const listUserService = new ListUsersService();

    const tags = await listUserService.execute();

    return response.json(tags);
  }
}

export { ListUsersController };
