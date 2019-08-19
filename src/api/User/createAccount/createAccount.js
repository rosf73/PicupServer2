import { prisma } from '../../../../generated/prisma-client';

export default {
  Mutation: {
    createAccount: async (_, args) => {
      const { nickName, email, password, profileLink } = args;
      
      await prisma.createUser({ nickName, email, password, profileLink });
      return true;
    }
  }
}