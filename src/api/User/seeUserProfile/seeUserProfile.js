import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeUserProfile: (_, args) => {
      const { id } = args;

      return prisma.user({ id });
    }
  }
}