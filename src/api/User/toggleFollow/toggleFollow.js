import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    toggleFollow: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { id } = args;
      const { user } = request;

      try {
        // const existingFollow = await prisma.user({ id }).following({ where: { id } });
        const existingFollow = await prisma.$exists.user({
          AND: [{ id }, { followers_some: { id: user.id } }]
        });
        
        if(!existingFollow)
          await prisma.updateUser({
            data: {
              following: {
                connect: { id }
              }
            },
            where: { id: user.id }
          });
        else
          await prisma.updateUser({
            data: {
              following: {
                disconnect: { id }
              }
            },
            where: { id: user.id }
          });
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    }
  }
}