import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    searchPost: async (_, args) => await prisma.posts({
      where: {
        OR: [
          { tags_starts_with: args.tag },
          { title_starts_with: args.term }
        ]
      }
    })
  }
}