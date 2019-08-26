import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeFullPost: async (_, args) => {
      const { id } = args;

      const post = await prisma.post({ id });
      const likeCount = await prisma.likesConnection({ where: { post: { id } } }).aggregate().count(); // connection을 통해 post의 like를 얻음
      const commentCount = await prisma.commentsConnection({ where: { post: { id } } }).aggregate().count();

      return { post, likeCount, commentCount };
    }
  }
}