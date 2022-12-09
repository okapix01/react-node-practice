import { User } from "@prisma/client";
import { Controller, Get, Path, Route } from "tsoa";
import { ErrorResponse } from "../@types/ErrorResponse";
import { UsersService } from "../service/UsersService";

/**
 * ユーザ.
 */
@Route("users")
export class UsersController extends Controller {
  /**
   * 指定ユーザを取得.
   * @param userId ユーザID
   * @returns 指定ユーザ
   */
  @Get("{userId}")
  public async getUser(@Path() userId: number): Promise<User | ErrorResponse> {
    return UsersService.get(userId).then((user) => {
      if (user) {
        return user;
      } else {
        this.setStatus(404);
        return {
          message: `ユーザー[${userId}]が見つかりませんでした。`,
        } as ErrorResponse;
      }
    });
  }

  /**
   * 全ユーザを取得.
   * @returns 全ユーザ
   */
  @Get()
  public async getUsers(): Promise<User[] | ErrorResponse> {
    return UsersService.list().then((users) => {
      if (users.length !== 0) {
        return users;
      } else {
        this.setStatus(404);
        return {
          message: `ユーザー1人も見つかりませんでした。`,
        } as ErrorResponse;
      }
    });
  }
}
