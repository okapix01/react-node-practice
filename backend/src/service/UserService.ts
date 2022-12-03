import { User } from "../@types/User";


export class UsersService {
  public get(id: number): User {
    return {
      id,
      name: "Jane Doe",
      email: "jane@doe.com",
    };
  }


}
