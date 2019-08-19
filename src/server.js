import './env'
import { GraphQLServer } from 'graphql-yoga'; // include express server
import logger from 'morgan';
import schema from './schema'
import './passport'
import { authenticate } from './passport';
import { isAuthenticated } from "./middlewares";

const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({ schema, context: ({ request }) => ({ request, isAuthenticated }) });

server.express.use(logger("dev")); // GraphQLServer 객체에 내장된 express 서버에서 morgan(logging 모듈) 이용
server.express.use(authenticate);

server.start({ port: PORT }, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);