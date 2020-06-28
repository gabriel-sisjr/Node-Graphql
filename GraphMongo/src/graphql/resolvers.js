import { fileLoader, mergeResolvers } from "merge-graphql-schemas";
import path from "path";

/**
 * Entra na raiz -> Modules -> Qualquer pasta dentro -> QlqerArquivo.gql
 * O merge faz a junção de todos os resolvers
 */
const resolversArray = fileLoader(
  path.join(__dirname, "modules", "**", "*.gql")
);
const resolvers = mergeResolvers(resolversArray);

export default resolvers;
