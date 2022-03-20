import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface CustomJwtPayload {
  // default value of the sub prop is a function, but in this application always will be a string (user id)
  // take a look in AuthenticateUserService
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).end();
  }

  // ignoring the first position of splitted authToken
  const [, token] = authToken.split(" ");

  try {
    const { sub } = verify(
      token,
      "ae365829bae78051232239c526e7687f"
    ) as CustomJwtPayload;

    request.user_id = sub;

    return next;
  } catch (error) {
    return response.status(401).end();
  }
}
