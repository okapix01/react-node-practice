import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/**
 * ユーザ.
 */
export const UsersRepository = {
  /**
   * 指定ユーザを取得.
   * @param userId ユーザID
   * @returns 指定ユーザ
   */
  get: (userId: number) => {
    return prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
  },

  /**
   * 全ユーザを取得.
   * @returns 全ユーザ
   */
  list: () => {
    return prisma.user.findMany();
  },
};
