"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Post",
    embedded: false
  },
  {
    name: "Content",
    embedded: false
  },
  {
    name: "Comment",
    embedded: false
  },
  {
    name: "Like",
    embedded: false
  },
  {
    name: "Interest",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://us1.prisma.sh/alswlzhsclq-a880f4/PicupServer2/dev`
});
exports.prisma = new exports.Prisma();
