import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { makeSchema, queryType } from "nexus";

/**
 * @description criando a consulta
 */
const Query = queryType({
  definition: (t) => {
    /**
     * @argument t.string irá informar que a variavel greeting é do tipo string
     * @argument resolve chama a função a ser executada
     */
    t.string("greeting", { resolve: () => "Hello Word!" });
  },
});

const schema = makeSchema({
  types: [Query],
});

const server = new ApolloServer({ schema });
const { url } = await startStandaloneServer(server, {
  listen: {
    port: 9000,
  },
});
console.log(`Server runnning at ${url}`);
