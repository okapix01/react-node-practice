import {
  Controller,
  Get,
  Path,
  Route,
} from "tsoa";
import { User } from "../@types/User";
import { UsersService } from "../service/UserService";

@Route("users")
export class UserController extends Controller {
  @Get("{userId}")
  public async getUser(
    @Path() userId: number,
  ): Promise<User> {
    return new UsersService().get(userId);
  }
}
