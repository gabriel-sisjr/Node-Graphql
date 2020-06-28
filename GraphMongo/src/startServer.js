import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";

function startServer({ typeDefs, resolvers }) {
  mongoose.connect(
    "URL de Conexão com mongo aqui.",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  const server = new ApolloServer({ typeDefs, resolvers });

  server.listen().then(({ url }) => console.log(`Server rodando em ${url}`));
}

export default startServer;
