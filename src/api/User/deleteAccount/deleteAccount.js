import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    deleteAccount: (_, __, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;

      return prisma.deleteUser({ id: user.id });
    }
  }
}