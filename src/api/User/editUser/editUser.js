import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    editUser: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { nickName, profileLink } = args;
      const { user } = request;

      if(nickName && (nickName !== user.nickName) && await prisma.$exists.user({ nickName })) {
        throw Error("이미 존재하는 닉네임입니다");
      }

      return prisma.updateUser(
        {
          data: { nickName, profileLink },
          where: { id: user.id }
        }
      );
    }
  }
}