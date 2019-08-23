import { prisma } from "../../../generated/prisma-client";

export default {
  User: {
    isFollowing: (parent, _, { request }) => {
      const { id } = parent;
      const { user } = request;

      return prisma.$exists.user({
        AND: [{ id }, { followers_some: { id: user.id } }]
      });
    },
    isMe: (parent, _, { request }) => {
      const { id } = parent;
      const { user } = request;
      
      return id === user.id;
    },
    posts: ({ id }) => prisma.user({ id }).posts()
  }
}