import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    upload: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { title, content, markerLink, imageLink, latitude, longitude, files } = args;
      const { user } = request;

      const post = await prisma.createPost({
        title,
        content,
        markerLink,
        imageLink,
        latitude,
        longitude,
        user: {
          connect: { id: user.id }
        }
      });
      files.forEach(async file => await prisma.createContent({
        link: file.link,
        type: file.type,
        post: {
          connect: { id: post.id }
        }
      }));

      return post;
    }
  }
}