import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    uploadPost: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { title, content, markerLink, imageLink, latitude, longitude, tags, hiddenTags, files } = args;
      const { user } = request;

      const post = await prisma.createPost({
        title,
        content,
        markerLink,
        imageLink,
        latitude,
        longitude,
        tags,
        hiddenTags,
        user: {
          connect: { id: user.id }
        }
      });
      files.forEach(async file => await prisma.createContent({
        link: file,
        type: file.type,
        post: {
          connect: { id: post.id }
        }
      }));

      return post;
    }
  }
}