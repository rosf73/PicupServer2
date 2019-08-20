import { prisma } from "../../../../generated/prisma-client";
import { generateToken } from "../../../utils";

export default {
  Mutation: {
    confirmSecret: async (_, args) => {
      const { secret, email } = args;
      const user = await prisma.user({ email });

      if(user.loginSecret === secret) {
        await prisma.updateUser({
          data: {
            loginSecret: null
          },
          where: { id: user.id }
        });
        return generateToken(user.id);
      }
      else {
        throw Error("Wrong email/secret combination!")
      }
    }
  }
}