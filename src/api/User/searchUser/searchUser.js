import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    searchUser: async (_, args) => prisma.users({
      where: { nickName_contains: args.term }
    })
  }
}