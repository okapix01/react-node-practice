import { UsersRepository } from "../repository/UsersRepository";

/**
 * ユーザ.
 */
export const UsersService = {
  /**
   * 指定ユーザを取得.
   * @param userId ユーザID
   * @returns 指定ユーザ
   */
  get: (userId: number) => {
    return UsersRepository.get(userId);
  },

  /**
   * 全ユーザを取得.
   * @returns 全ユーザ
   */
  list: () => {
    return UsersRepository.list();
  },
};
