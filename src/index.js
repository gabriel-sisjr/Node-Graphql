const { ApolloServer, gql } = require("apollo-server");

// Toda Request é POST
// Toda Request bate no mesmo EndPoint

// Query -> GET
// Mutation -> Outros metodos HTTP
// Scalar Typeps -> String, Int, Boolean, Float e ID

// O Mapeamento dos types para os resolvers é de 1 pra 1q
// Por padrão os atributos podem ser nulos, se houver obrigatoriedade adiciona um ! ao tipo.
const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
    email: String!
    active: Boolean!
  }

  #Aninhando itens
  type Post {
    _id: ID!
    title: String!
    content: String!
    author: User!
  }

  # Isso significa que a API pode retornar apenas um array vazio ou com conteudo. Nunca [null]/null.
  type Query {
    hello: String
    users: [User!]!
    userByName(name: String!): User!
  }

  type Mutation {
    createUser(name: String!, email: String!): User!
  }
`;

const users = [
  {
    _id: String(Math.random()),
    name: "Gabriel",
    email: "gabriel.sistemasjr@gmail.com",
    active: true,
  },
  {
    _id: String(Math.random()),
    name: "Pedro",
    email: "pedro.sistemasjr@gmail.com",
    active: false,
  },
  {
    _id: String(Math.random()),
    name: "Paulo",
    email: "paulo.sistemasjr@gmail.com",
    active: true,
  },
];

const resolvers = {
  Query: {
    hello: () => "Hello World",
    users: () => users,
    userByName: (_, args) => {
      return users.find((user) => user.name == args.name);
    },
  },

  // Fazendo uma inserção.
  Mutation: {
    createUser: (_, args) => {
      const newUser = {
        _id: String(Math.random()),
        name: String(args.name),
        email: String(args.email),
        active: true,
      };

      users.push(newUser);
      return newUser;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`Server running at ${url}`);
});
