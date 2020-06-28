import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";

function startServer({ typeDefs, resolvers }) {
  mongoose.connect(
    "mongodb+srv://gab:123@cluster0-jtloq.mongodb.net/SDDB?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  const server = new ApolloServer({ typeDefs, resolvers });

  server.listen().then(({ url }) => console.log(`Server rodando em ${url}`));
}

export default startServer;
