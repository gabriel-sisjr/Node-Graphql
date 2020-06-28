import { fileLoader, mergeTypes } from "merge-graphql-schemas";
import path from "path";

/**
 * Entra na raiz -> Modules -> Qualquer pasta dentro -> QlqerArquivo.gql
 * O merge faz a junção de todos os tipos
 */
const typesArray = fileLoader(path.join(__dirname, "modules", "**", "*.gql"));
const typeDefs = mergeTypes(typesArray);

export default typeDefs;
