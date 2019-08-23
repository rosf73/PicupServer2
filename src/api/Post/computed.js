import { prisma } from "../../../generated/prisma-client";

export default {
  Post: {
    isLiked: (parent, _, { request }) => {
      const { id: postId } = parent;
      const { user } = request;

      return prisma.$exists.like({
        AND: [
          { post: { id: postId } },
          { user: { id: user.id } }
        ]
      })
    },
    user: ({ id }) => prisma.post({ id }).user(),
    contents: ({ id }) => prisma.post({ id }).files(),
    comments: ({ id }) => prisma.post({ id }).comments(),
    likes: ({ id }) => prisma.post({ id }).likes(),
  }
}